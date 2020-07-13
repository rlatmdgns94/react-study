import React from "react"; // 리액트 불러오기
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomerDelete from "./CustomerDelete";
class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
        <TableCell>
          <CustomerDelete
            id={this.props.id}
            stateRefresh={this.props.stateRefresh}
          />
        </TableCell>
      </TableRow>
    );
  } //그려지는 내용
} //리액트의 컴포넌트 형태로 class 정의

export default Customer; //Customer 내보내기
