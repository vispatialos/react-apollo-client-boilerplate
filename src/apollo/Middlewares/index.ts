import { ApolloLink } from "@apollo/client";
import serverLink from "./server";
import { errorLink } from "./errors";

const link: ApolloLink = ApolloLink.from([errorLink, serverLink]);

export default link;
