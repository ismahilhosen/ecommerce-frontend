import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../compnents/PageTitle";
import { useSelector } from "react-redux";

const Home = () => {
	const {isLoading, users, error} = useSelector((state) => state)
	return (
		<div>
			<PageTitle title="Home"></PageTitle>
			<h1 className="font-bold text-2xl">Home page</h1>

		</div>
	);
};

export default Home;
