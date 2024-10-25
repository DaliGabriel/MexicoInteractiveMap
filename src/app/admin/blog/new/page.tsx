import BlogForm from "@/components/Blog/BlogForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {

  const authCookie = cookies().get('authCookie')?.value;

  if (authCookie !== 'authenticated') {
    // Redirect to the login page if not authenticated
    redirect('/login');
  }

  return (
    <div>
      <h1 className="text-center m-10">Create a New Blog Post</h1>
      <BlogForm />
    </div>
  );
};

export default page;
