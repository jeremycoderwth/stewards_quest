import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnHomepage = nextUrl.pathname.startsWith('/homepage');

            if (isOnHomepage) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('./homepage', nextUrl));
            }

            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;