import PageTitle from "../Shared/Helmet/PageTitle";
import 'react-loading-skeleton/dist/skeleton.css'

const Blogs = () => {



    return (
        <div>
            <PageTitle title="Careerfy | Blogs"></PageTitle>
            <div className="max-w-7xl mx-auto">
                <div className="bg-primary-color lg:rounded-xl my-10">
                    <h2 className="text-white text-center py-10 font-bold text-4xl">Blogs</h2>
                </div>
                <div className="mb-28">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium bg-primary-color text-white">
                            What is an access token and refresh token? How do they work and where should we
                            store them on the client-side?
                        </div>
                        <div className="collapse-content bg-gray-300 leading-8">
                            <h3 className="text-xl font-semibold mt-10 mb-2">01. Access Token</h3>
                            <p>A secure string that a client uses to access protected resources. An instance issues access tokens to clients that have a valid authorization grant. Each access token has a specific scope, lifespan, and other attributes.
                                By default, an instance issues access tokens with a 30-minute lifespan in the scenario where the instance is the OAuth provider. For third-party tokens, 30 days.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">02. Refresh Token</h3>
                            <p>A credential that a client uses to obtain new access tokens without requiring additional user authorization. An instance issues a refresh token to a client when it is first authorized to have an access token.
                                By default, an instance issues refresh tokens with a 100-day lifespan in the scenario where the instance is the OAuth provider. For third-party tokens, 365 days.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">03. How do they work?</h3>
                            <p className="italic font-semibold">Access Token :</p>
                            <p>Login: Use a known username and password to prove your identity.<br />
                                Verification: The server authenticates the data and issues a token.<br />
                                Storage: The token is sent to your browser for storage.<br />
                                Communication: Each time you access something new on the server, your token is verified once more.<br />
                                Deletion: When your session is over, the token is discarded.
                            </p>
                            <p className="italic font-semibold mt-5">Refresh Token :</p>
                            <p>Login : The first stage involves the user logging in to an API service. This could be done by sending an HTTP request with a username and password. Then, on successful authentication, the API returns an access token (for example, a JWT).<br />
                                Accessing a Protected Endpoint : Now that we have a valid access token, we can proceed to make a request on behalf of a user. A protected endpoint is an endpoint that requires the user to be logged in to fetch or write data. A good example is an endpoint that returns the current users profile.<br />
                                Renewing Access Token Using a Refresh Token : Above, I mentioned that the access token will expire after five minutes. So, in order to retrieve a new token after that happens without repeating Stage 1, you can send a request to another endpoint to renew the access token.
                            </p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">04. Where should we store them on client side?</h3>
                            <p>01. In-Memory Storage : Storing tokens in memory variables in your client-side application is another option. While this is more secure than Web Storage, it doesnt persist tokens after the user closes the browser.</p>
                            <p>02. Browsers Web Storage : You can store tokens in the browsers Web Storage, including the localStorage or sessionStorage. However, you need to be cautious with this method, as Web Storage is accessible through client-side JavaScript.
                                You can mitigate the risk by including security mechanisms like Content Security Policy (CSP) and by following best practices for handling tokens in Web Storage. Make sure you validate the tokens integrity and use the Authorization header to send tokens securely to the server.</p>
                            <p>03. HTTP-Only Cookies with a Separate Session Cookie : Some applications store access tokens in HTTP-only cookies while storing a session token (not a refresh token) in a non-HTTP-only cookie. The session token is used to identify the user session, while access tokens are still stored in a secure way.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium bg-primary-color text-white">
                            What is express js? What is Nest JS?
                        </div>
                        <div className="collapse-content bg-gray-300 leading-8">
                            <h3 className="text-xl font-semibold mt-10 mb-2">01. Express JS</h3>
                            <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                                Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. To learn more about Express and what it can do,</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">02. Nest JS</h3>
                            <p>Nest.js is a server-side Node.js framework thats great for building highly testable and maintainable backend applications. You can create countless types of applications with Node.js; you are only limited by your applications features.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium bg-primary-color text-white">
                            My Code Explanation.
                        </div>
                        <div className="collapse-content bg-gray-300">
                            <h3 className="text-xl font-semibold mt-10 mb-2">Project Overview:</h3>
                            <p>Our job-seeking website, CareerFy is designed to provide job seekers with a seamless platform for discovering and applying for their dream jobs. It is a comprehensive solution that not only simplifies the job search process but also enhances the overall job-seeking experience.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">Entry Point :</h3>
                            <h3>The entry point for the application is index.js, where we render the root component. We use React Router to manage routes and transitions between key sections of the website</h3>
                            <h3 className="text-xl font-semibold mt-10 mb-2">User Profiles and Job Listings:</h3>
                            <p>Job seekers can create and manage their profiles, including personal information, skills, and work experience. Job listings are displayed dynamically, pulling data from external APIs. Each job listing can be saved or applied to directly from the website.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">Authentication:</h3>
                            <p>Our authentication system enables users to register, log in, and maintain secure sessions. We integrate Firebase for authentication services, ensuring a robust and secure experience.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">Code Comments:</h3>
                            <p>Throughout the codebase, we have provided clear and concise comments to explain complex logic, component functionality, and the flow of data. This helps developers quickly understand and contribute to the project.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">API Integration:</h3>
                            <p>Careerfy integrates with external job listing APIs, allowing us to provide an extensive range of job opportunities to our users. We handle API requests and responses gracefully, providing relevant job data to job seekers.</p>
                            <h3 className="text-xl font-semibold mt-10 mb-2">Search and Filtering:</h3>
                            <p>Our website offers a user-friendly search and filtering system. Job seekers can easily refine their job searches based on criteria such as location, industry, or job type, making it effortless to discover the most relevant job listings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;