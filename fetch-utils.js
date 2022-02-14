// Enter Supabase Information
const SUPABASE_URL = 'https://rkwuoifoqjtdyuamlqbt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrd3VvaWZvcWp0ZHl1YW1scWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE2MTAsImV4cCI6MTk1OTkxNzYxMH0.0bzW8RqDL090ne0FvaYqJLDBsUCtpfGm0oN6I-xwziw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });
    
}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
