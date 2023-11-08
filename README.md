# Career x 

<a href="https://bdcareer-x.web.app">Website Live Link</a>

# Website Features --

**Main Features:**
1. **Visual Appeal:**
   - Ensure pleasing color contrast and proper design alignment.
   - Customize component styling if necessary.

2. **Navigation and Footer:**
   - Consistent navbar and footer on all pages except 404 page.
   - Footer includes website logo, name, copyright, contact info, social media links, and address.

3. **Navbar:**
   - Includes website logo, name, Home, All Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile.
   - Conditional display of User Profile picture or Login button.
   - User's name visible on hover when logged in.

4. **Login & Registration:**
   - Display relevant error messages on Registration and Login pages.
   - Login Page: Email/Password, Google Sign-in, link to Registration page.
   - Registration Page: Name, Email, Password, Photo URL.

5. **Home Page:**
   - Banner section with Heading Title, Short Description, and Search Input Field.
   - Job by Category section with a tab system, including On Site, Remote, Hybrid, and Part Time.
   - Active tab feature.
   - Each job card displays Name of the job poster, Job Title, Job Posting Date, Application Deadline, Salary range, Job Applicants Number, and View Details Button.
   - View Details button prompts login if not logged in.

6. **Blogs Page:**
   - Answers to specific questions about access tokens, refresh tokens, Express.js, and Nest.js.
   - Code explanations.

7. **All Jobs Page:**
   - Table/list of all jobs posted.
   - Display Name of job poster, Job Title, Job Posting Date, Application Deadline, Salary range, and Details Button.
   - Search system based on Job Title.
   - View Details button redirects to Login Page if not logged in.

8. **Single Job Details:**
   - Private route (only accessible after clicking View Details button).
   - Display company logo, job Banner, job title, description, salary range, Number of Applicants, and Apply Button.
   - Apply Button opens a modal with auto-filled user name and email and an input field for submitting a resume link.
   - Application submission saved in MongoDB collection.
   - Prevent applying for a job if the deadline is over or employer applies to their job.

9. **Add A Job Page:**
   - Private route (only for logged-in users).
   - Form fields for Job Banner URL, Job Title, User Name, Job Category, Salary range, Job Description, Job Posting Date, and Application Deadline.
   - Update the Job Applicants Number when a user applies.

10. **My Jobs Page:**
    - Private route for logged-in users.
    - Displays jobs added by the logged-in user in a tabular form.
    - Update and delete buttons for each job.

11. **Applied Jobs Page:**
    - Private route for logged-in users.
    - Shows jobs applied by the user.
    - Filter system based on Job Category.

12. **CRUD Operations:**
    - Display relevant toast or notifications for CRUD operations.

13. **404 Page:**
    - A custom 404 page with a Back to home button.


14. **Reload:**
   - Protect private routes from redirection to the login page on reload.

15. **Responsive Design:**
   - Make the home page responsive for mobile and desktop (tablet optional).

16. **JWT Implementation:**
   - Implement JWT for at least two routes To Protect Data piracy.


17. **Dynamic Website Title:**
   - Change the website title according to the route the user is visiting.

18. **Loading Spinner:**
   - Implement a loading spinner for data loading states.