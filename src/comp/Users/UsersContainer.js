import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Paginator from "../Common/Paginator/Paginator";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props;
        getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize, getUsers} = this.props;
        getUsers(pageNumber, pageSize);
    }

    render() {
        const {follow, unfollow, followingInProgress, totalUsersCount, pageSize, currentPage, isFetching, users} = this.props;
        return <>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={this.onPageChanged}

            />
            {isFetching ? <Preloader/> :
                <Users users={users}
                       follow={follow}
                       unfollow={unfollow}
                       followingInProgress={followingInProgress}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    };

}
export default compose(withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer)
