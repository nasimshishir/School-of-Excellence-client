import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto px-6 pb-16'>
            <h1 className='text-center text-6xl font-bold py-16'>Blogs</h1>
            <div className='card-body rounded-lg shadow-lg bg-white my-5'>
                <h4 className='card-title'>What is "cors"?</h4>
                <p className='text-md'><strong className='mr-2'>Answer: </strong>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </p>
            </div>

            <div className='card-body rounded-lg shadow-lg bg-white my-5'>
                <h4 className='card-title'>Why are you using "firebase"? What other options do you have to implement authentication?</h4>
                <p className='text-md'><strong className='mr-2'>Answer: </strong>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                </p>
                <h5 className='text-md'><strong>Other Option to Authentication:</strong></h5>
                <li className='text-md'>MongoDB</li>
                <li className='text-md'>Passport</li>
                <li className='text-md'>Okta</li>
                <li className='text-md'>JSON web Token</li>
                <li className='text-md'>Amazon Cognito.</li>

            </div>

            <div className='card-body rounded-lg shadow-lg bg-white my-5'>
                <h4 className='card-title'>How does the private route work?</h4>
                <p className='text-md'><strong className='mr-2'>Answer: </strong>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                </p>
            </div>

            <div className='card-body rounded-lg shadow-lg bg-white my-5'>
                <h4 className='card-title'>What is Node? How does Node work?</h4>
                <p className='text-md'><strong className='mr-2'>Answer: </strong>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                </p>
                <p className='text-md'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>

        </div>
    );
};

export default Blogs;