import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import logo from '../assets/klothnick.svg';

interface IDeleteAccountForm {
    phoneNumber: string;
}

const AccountDeletionPage = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);

    const handleSubmit = async (values: IDeleteAccountForm, { resetForm }: any) => {
        if (!values.phoneNumber) {
            setErrorMessage('Invalid phone number.');
            return;
        }

        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Show success toast
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);

            resetForm();
            setErrorMessage(null);
            setIsLoading(false);
        } catch (err: any) {
            setErrorMessage(err.response?.data?.message || 'An error occurred');
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="  min-h-screen bg-primary bg-amber-100/40">
                {/* Custom Toast Notification */}
                {showToast && (
                    <div className="fixed top-4 right-4 z-50 animate-slide-in">
                        <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">Request sent successfully.</span>
                        </div>
                    </div>
                )}

                <div className="relative mx-auto px-6">
                    <div className="flex h-full py-16 gap-4">
                        <div className="flex-1 hidden lg:flex flex-col items-start h-full"></div>

                        <div className="flex-1 w-full">
                            <img className="h-10" src={logo} alt="" />
                            <div className="bg-gray-200 p-8 sm:p-[52px] rounded-lg mt-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Delete your account</h2>
                                    <div className="text-gray-500 max-w-lg mt-3">
                                        Enter your phone number to request account deletion.
                                    </div>
                                    <div className="mt-8">
                                        <Formik
                                            initialValues={{
                                                phoneNumber: '',
                                            }}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ values, handleChange }) => (
                                                <Form>
                                                    <div>
                                                        <label
                                                            htmlFor="phoneNumber"
                                                            className="block text-sm font-medium text-gray-700 mb-2"
                                                        >
                                                            Phone Number
                                                        </label>
                                                        <Field
                                                            id="phoneNumber"
                                                            name="phoneNumber"
                                                            type="text"
                                                            value={values.phoneNumber}
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                handleChange(e);
                                                                setErrorMessage(null);
                                                            }}
                                                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                                                                errorMessage
                                                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                                                    : 'border-gray-300 focus:ring-gray-500 focus:border-gray-500'
                                                            }`}
                                                            placeholder="Enter your phone number"
                                                        />
                                                    </div>

                                                    {errorMessage && (
                                                        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                                                    )}

                                                    <div className="mt-8">
                                                        <button
                                                            type="submit"
                                                            disabled={isLoading}
                                                            className="w-full bg-gray-400 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            {isLoading ? 'Submitting...' : 'Submit'}
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className={' text-sm mt-8'}>
                                    Copyright © {new Date().getFullYear()} Klothnick · Privacy & terms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountDeletionPage;
