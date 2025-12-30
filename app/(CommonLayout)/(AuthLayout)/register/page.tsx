import LoginForm from "@/components/module/Login/LoginForm";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
     <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm/>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default RegisterPage;
