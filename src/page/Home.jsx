import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../compnents/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { getUsersReducer } from "../services/reducers/userReducer";
import { getUsersAction } from "../services/actions/usersAction";

const Home = () => {
	const {isLoading, users, error}= useSelector((state)=>state);
	const dispatch = useDispatch();
	console.log(users);
	
	useEffect(()=>{
		dispatch(getUsersAction())
	},[])
	return (
		<div>
			<PageTitle title="Home"></PageTitle>
			<h1 className="font-bold text-2xl">Home page</h1>
			{isLoading && <h4>Loading...</h4>}
			{users && users.map(user => <div>
				<h3>{user.name}</h3>
			</div>)}
		</div>
	);
};

export default Home;
