import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const users = [
  { id: '1', email: 'ceo@myoapp.com', password: 'ceo@123', role: 'ceo' },
  { id: '2', email: 'manager@myoapp.com', password: 'manager@123', role: 'manager' },
  { id: '3', email: 'employee@myoapp.com', password: 'employee@123', role: 'employee' },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'user@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = users.find((u) => u.email === credentials.email && u.password === credentials.password);

        if (!user) return null;

        return { id: user.id, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: { signIn: '/login' },
  session: { strategy: 'jwt' },
});
