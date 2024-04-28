

// import required libraries
import { User } from "../models/user.js";
import Error from "../utils/customErrorClass.js";
import { catchAsyncError } from "../utils/asyncErrorHandler.js";



// user  registeration
export const signup = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) return next(new Error("Please fill the details!"));

    const id = await User.findOne({ email });
    if (id) return next(new Error("User Already Exist!", 409));

    const details = await User.create({ name, email, password });

    const token = details.generateToken();


    res.status(200).cookie("token", token, {
        httpOnly: true, expires: new Date(
            Date.now() + process.env.EXPIRES_IN * 24 * 60 * 60 * 1000
        )
    }).json({
        success: true,
        message: `Hii ${details.name}! You have registered successfully!`
    })
});



// user login
export const login = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) return next(new Error("Please fill the details!"));
    
    const details = await User.findOne({ email }).select("+password");
    if (!details) return next(new Error("Wrong Details, Please try again!", 409));
    
    const isMatch = await details.comparePassword(password);
    
    if (!isMatch) return next(new Error("Wrong Details, Please try again!", 409));
    
    const token = details.generateToken();

    res.status(200).cookie("token", token, { httpOnly: true, expires: new Date(Date.now() + process.env.EXPIRES_IN * 24 * 60 * 60 * 1000) }).json({
        success: true,
        message: `Hii ${details.name}, Glad to see you back`
    })
});



//  user logout
export const logout = (req, res, next) => {
    try {
        res.status(201).cookie("token", null, { httpOnly: true, expires: new Date(Date.now()) }).json({
            success: true,
            message: 'Logged out successfully'
        });
    }
    catch (err) {
        return next(new CustomError("Unable to Loggged out, Please try again"));
    }
}

//  user logout
export const userDetail = (req, res, next) => {
    const user = req.user;

    res.status(200)
    .json({
        success: true,
        user: user,
        message: `Hii ${user.name}, Here are your details`
    })

}

