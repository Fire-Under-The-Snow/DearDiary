import {z} from 'zod'

export const usernamevalidation= z.string()
.min(2,{message:"minimum 2 character must be there in username"})
.max(20,{message:"max char limit is 20, try less than that"})
.regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const signupSchema=z.object({
    username: usernamevalidation,
    email:z.string().email({message:"invalid email address given"}),
    password:z.string().min(4,{message:"minimum four character are needed "})
})