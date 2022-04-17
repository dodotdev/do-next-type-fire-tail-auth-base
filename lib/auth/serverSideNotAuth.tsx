import React from 'react';
import { parseCookies, setCookie } from 'nookies';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

// This HAS NOT BEEN UPDATED NOT SURE IF NEEDED

import { firebaseAdmin } from '@/lib/firebase/firebaseAdmin';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const cookies = parseCookies(context);
    // console.log(JSON.stringify(cookies, null, 2));
    // console.log('SS ', context.resolvedUrl);

    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    // the user is authenticated!
    // console.log('AUTHED', token);

    const { name, uid, email, picture, email_verified } = token;
    // FETCH STUFF HERE!! 🚀
    console.log('AUTHED', token.uid, token.email);
    // console.log('URL', context.resolvedUrl);

    if (
      // context.resolvedUrl === '/a/setup' ||
      context.resolvedUrl === '/a/signin' ||
      context.resolvedUrl === '/a/join'
    ) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return { props: {} as never };

    // return {
    //   props: { message: `Your email is ${email} and your UID is ${uid}.` },
    // };
  } catch (err) {
    // if (context.resolvedUrl != '/a/signin') {
    //   return {
    //     redirect: {
    //       destination: '/a/signin',
    //       permanent: false,
    //     },
    //   };
    // console.log('NOT AUTHED ERROR');
    // console.log('URL ERRPOR', context.resolvedUrl);
  }
  // `as never` prevents inference issues
  // with InferGetServerSidePropsType.
  // The props returned here don't matter because we've
  // already redirected the user.

  // console.log('NOT AUTHED');
  // console.log('URL ', context.resolvedUrl);
  return { props: {} as never };
};
