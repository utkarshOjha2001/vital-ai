import * as z from 'zod';

const loginValidationSchema = z.object({
    email: z.email({
        message: 'Invalid email address'
    }).
    trim(),
    password: z.string().min(6, 
        {
          message: 'Password must be at least 6 characters long' 
        }
    ).max(100),
});

type LoginValidationSchema = z.infer<typeof loginValidationSchema>;

export default LoginValidationSchema;