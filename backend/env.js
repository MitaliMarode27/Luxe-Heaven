import z from "zod";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" }); 

console.log("MONGODB_DATABASE_NAME from process.env:", process.env.MONGODB_DATABASE_NAME);

export const env = z
 .object({
    PORT: z.coerce.number().default(3000), 
    MONGODB_URI: z.string().default("mongodb+srv://MitaliMarode:Mitali927@cluster0.g7dqyzm.mongodb.net/Users?retryWrites=true&w=majority"),
    MONGODB_DATABASE_NAME: z.string().nonempty("MONGODB_DATABASE_NAME is required"), 
    JWT_SECRET: z.string().default("mySuperSecretKey123"),
  })
  .parse(process.env);
  console.log("Environment variables loaded successfully:", env);


const loginSchema = z.object({

  email : z
  .string({required_error : "Email is Required"})
  .trim()
  .email({message : "Invalid Email Address"})
  .min(5,{message:"Email must be atleast of 5 charecter."})
  .max(255,{message:"Email must not be more than 255 charecters"}),

  password : z
    .string({required_error : "Email is Required"})
    .min(5, {message : "Password must be atleat of 5 Charecters"})
    .max(100, {message : "Password must not be more than 100 charecters"})
})



const signupSchema = loginSchema.extend({
  name : z
  .string({required_error : "Name is Required"})
  .trim()
  .email({message:"Invalid Email Address"})
  .min(3,{message:"Name must be atleast of 3 charecter."})
  .max(255,{message:"Name must not be more than 255 charecters"}),

  phone : z
  .string({required_error : "Phone No. is Required"})
  .trim()
  .min(10,{message:"Phone No. must be atleast of 10 charecter."})
  .max(10,{message:"Phone No. must not be more than 10 charecters"}),

})

export {signupSchema, loginSchema};