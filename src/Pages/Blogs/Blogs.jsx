import database from "../../assets/blog/server.png";
import nodejs from "../../assets/blog/nodejs.png";
import express from "../../assets/blog/expressjs.png";
import token from "../../assets/blog/token.jpg";
import useTitle from "../../Hooks/useTitle";
const Blogs = () => {
  useTitle("Blog")
  return (
    <div className="container">
      <h1 className="text-center my-5">Blogs</h1>
      <div className="card p-5 wc-75 mx-auto mb-4">
        <img src={nodejs} className="card-img-top wb-50 " alt="..." />
        <div className="card-body">
          <h2 className="my-4">What is MongoDB aggregate?</h2>
          <p className="card-text">
            MongoDB Aggregation is a framework for performing data processing
            operations on MongoDB collections. It allows you to perform complex
            data analysis tasks, such as filtering, grouping, sorting, joining,
            and transforming data, using a pipeline-based approach. The
            aggregation pipeline consists of multiple stages that process the
            documents in a collection sequentially. Each stage performs a
            specific operation on the input documents and passes the results to
            the next stage.
          </p>
          <p className="card-text">
            The stages in the aggregation pipeline include operations like
            $match (filters documents), $group (groups documents based on
            specified criteria), $sort (sorts documents), $project (selects
            specific fields from documents), $lookup (performs a left outer join
            with another collection), and many more. By combining these stages,
            you can build powerful data processing pipelines.
          </p>
        </div>
      </div>

      <div className="card p-5 wc-75 mx-auto mb-4">
        <img src={token} className="card-img-top wb-50 " alt="..." />
        <div className="card-body">
          <h2 className="my-4">What is an access token and refresh token?</h2>
          <p className="card-text">
            An access token is a type of credential used in authentication and
            authorization processes in computer systems and online services. It
            is a string of characters that grants a specific user or application
            access to certain resources or functionalities.
          </p>
          <p className="card-text">
            Access tokens are commonly used in the context of web applications
            and APIs (Application Programming Interfaces). When a user logs into
            a web application, the application typically issues an access token
            to the user. This token is then used to authenticate subsequent
            requests made by the user to the application's server or API.
          </p>
          <p className="card-text">
            access tokens provide a secure and efficient way to manage user
            authentication and authorization, ensuring that only authorized
            individuals or applications can access protected resources.
          </p>
          <p className="card-text">
            A refresh token is a long-lived credential that is used to obtain a
            new access token when the current one expires. It is typically
            issued alongside the access token during the authentication process.
            Unlike access tokens, refresh tokens are not sent with each request
            to the server. They are securely stored on the client-side and used
            to request new access tokens when needed. Refresh tokens have a
            longer expiration time compared to access tokens, which allows for
            automatic or transparent renewal of access without requiring the
            user to reauthenticate.
          </p>
        </div>
      </div>

      <div className="card p-5 wc-75 mb-4 mx-auto">
        <img
          src={database}
          className="card-img-top wb-50 "
          style={{ height: "370px" }}
          alt="..."
        />
        <div className="card-body">
          <h2 className="my-4">SQL.js vs NoSQL</h2>
          <p className="card-text">
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
            different types of database management systems that have different
            approaches to storing and retrieving data. Here are some key
            differences between SQL and NoSQL databases:
          </p>
          <p className="card-text">
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
            different types of database management systems that have different
            approaches to storing and retrieving data. Here are some key
            differences between SQL and NoSQL databases:
          </p>
          <p className="card-text">
            NoSQL: NoSQL databases are well-suited for unstructured or
            semi-structured data, real-time applications, content management
            systems, and scenarios requiring high scalability and flexibility.
          </p>
          <p className="card-text">
            It is important to note that both SQL and NoSQL databases have their
            strengths and weaknesses, and the choice between them depends on the
            specific requirements of your application and the nature of your
            data.
          </p>
        </div>
      </div>
      <div className="card p-5 wc-75 mx-auto">
        <img
          src={express}
          className="card-img-top wb-50 "
          style={{ height: "370px" }}
          alt="..."
        />
        <div className="card-body">
          <h2 className="my-4">Express.js & Nest.js</h2>
          <p className="card-text">
          Express.js is a fast, unopinionated, and minimalist web application framework for Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware support, and template engine integration. Express.js allows developers to create server-side applications easily and efficiently by providing a simple and flexible API.
          </p>
          <p className="card-text">
          NestJS, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily influenced by Angular's architecture and design principles. NestJS provides a robust set of features and modules to help developers create enterprise-grade applications, including a powerful dependency injection system, declarative programming using decorators, built-in support for testing, and easy integration with other libraries and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
