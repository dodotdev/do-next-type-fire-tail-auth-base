import React from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { firebaseAdmin } from '@/lib/firebase/firebaseAdmin';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const cookies = parseCookies(context);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.accessToken);
    // the user is authenticated!
    const { name, uid, email, picture, email_verified } = token;
    // FETCH STUFF HERE!! 🚀

    if (
      context.resolvedUrl == '/a/signin' ||
      context.resolvedUrl == '/a/join'
    ) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: { user: { ...token } },
    };
  } catch (err) {
    if (context.resolvedUrl != '/login') {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }
    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never };
  }
};
