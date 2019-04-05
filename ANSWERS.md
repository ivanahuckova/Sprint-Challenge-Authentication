1.  What is the purpose of using _sessions_?

    _Sessions are used to store information. Sessions get stored on the client as well as a server. A session creates a file in a temporary directory on the server where registered session variables and their values are stored. This data will be available to all pages on the site during that visit. A session ends when the user closes the browser or after leaving the site, the server will terminate the session after a predetermined period of time, commonly 30 minutes duration._

1.  What does bcrypt do to help us store passwords in a secure manner.

    _We use bcrypt to hash the passwords before storing it in the database_

1.  What does bcrypt do to slow down attackers?

    _Bcrypt use a configurable iteration count, so the answer to your question is: whatever you want it to be. If the iteration count is such that one bcrypt invocation is as expensive as 10 computations of MD5, then brute-forcing the password will be 10 times more expensive with bcrypt than with MD5. If the iteration count is such that one bcrypt invocation is as expensive as 10 millions of computations of MD5, then brute-forcing the password will be 10 million times more expensive with bcrypt than with MD5. An additional factor is that bcrypt is, by nature, quite hostile to GPU optimization; this is due to the kind of operations that are used within the algorithm. MD5 is, by comparison, very easy to implement and run efficiently on a GPU. This means that an attacker may get a substantial boost out of a GPU when cracking MD5-protected passwords; while with bcrypt he will need to use the same kind of CPU as the defender. See this answer for further details._

1.  What are the three parts of the JSON Web Token?

- header
- payload
- verification of signature
