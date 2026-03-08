import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    const { error } = await signUp(email, password);
    setLoading(false);

    if (error) {
      setError(error);
    } else {
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center bg-white rounded-2xl border border-stone-100 shadow-sm p-10">
          <div className="w-14 h-14 bg-forest-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={28} className="text-forest-600" />
          </div>
          <h2 className="font-heading font-bold text-charcoal-900 text-2xl mb-3">Account created!</h2>
          <p className="text-charcoal-500 text-sm leading-relaxed mb-6">
            Your BuildersCo account has been created. Redirecting you to sign in...
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-800 text-white font-semibold rounded-xl hover:bg-charcoal-900 transition-colors text-sm"
          >
            Sign In Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-charcoal-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">BC</span>
          </div>
          <div>
            <span className="text-charcoal-900 font-bold text-xl tracking-tight">BuildersCo</span>
            <span className="text-stone-500 text-xs block leading-none -mt-0.5">Premium Building Materials</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors font-medium"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8 md:p-10">
            <div className="mb-8">
              <h1 className="font-heading font-bold text-charcoal-900 text-3xl mb-2">Create an account</h1>
              <p className="text-charcoal-500 text-sm">Join BuildersCo to access trade pricing and exclusive resources</p>
            </div>

            {error && (
              <div className="mb-6 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com.au"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-charcoal-900 placeholder-charcoal-300 text-sm focus:outline-none focus:border-charcoal-400 focus:ring-2 focus:ring-charcoal-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full px-4 py-3 pr-11 rounded-xl border border-stone-200 text-charcoal-900 placeholder-charcoal-300 text-sm focus:outline-none focus:border-charcoal-400 focus:ring-2 focus:ring-charcoal-100 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-charcoal-900 placeholder-charcoal-300 text-sm focus:outline-none focus:border-charcoal-400 focus:ring-2 focus:ring-charcoal-100 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-charcoal-800 text-white font-semibold rounded-xl hover:bg-charcoal-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm mt-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <UserPlus size={15} />
                )}
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-charcoal-500">
              Already have an account?{' '}
              <Link to="/login" className="text-charcoal-800 font-semibold hover:text-charcoal-900 transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-charcoal-400 mt-6">
            By creating an account, you agree to our{' '}
            <a href="#" className="underline hover:text-charcoal-600">Terms of Use</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-charcoal-600">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
