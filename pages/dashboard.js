import React from 'react';
//import prisma from "../../utils/prisma";
import { PrismaClient } from '@prisma/client'


import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Highlight from '../components/Highlight';

export default function HomePage({ user }) {

console.log(user);

  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">My Dashboard</h1>
        <div data-testid="ssr-text">
          <p>
            You can protect a server-side rendered page by wrapping the <code>getServerSideProps</code> function with{' '}
            <code>withPageAuthRequired</code>. Only logged in users will be able to access it. If the user is logged
            out, they will be redirected to the login page instead.{' '}
          </p>


       
          <p>
            Protected server-side rendered pages automatically receive a <code>user</code> prop containing the user
            profile.
          </p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({

  async getServerSideProps() {

    const prisma = new PrismaClient()
    const posts = await prisma.post.findMany({ select: {
      id: true,
      title: true,
      content: true,
    }})
   

   // console.log(posts);

    return { props: posts }
  
  
  }



});

