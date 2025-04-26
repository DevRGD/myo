'use server';
import { signIn } from '@/utils/auth';

export async function authenticateUser(formData) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    return { error: 'Invalid email or password' };
  }
}

export async function registerUser(formData) {
  try {
    const credentials = Object.fromEntries(formData.entries());
    await signUp(credentials);
    return { success: true };
  } catch (error) {
    return { error: 'Error creating account. Try again!' };
  }
}
