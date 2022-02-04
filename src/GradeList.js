import { useState, useRef, useEffect } from "react";
import { Table, Button, Container, Col, Row } from "react-bootstrap";
import { BsFillXCircleFill } from 'react-icons/bs'
import * as React from 'react';

const styles = {
    textCenter: { textAlign: 'center' },
    textRight: { textAlign: 'right' },
}

function GradeList({ data, setDataItems }) {
    const [open, setOpen] = React.useState(false);

    const [totalGPA, setTotalGPA] = useState(0);

    function SemTable(props) {
        const { row } = props;
        const { semRow } = props;
        const { i } = props;
        if (row.semester === semRow) {
            return (
                <tr key={i}>
                    <td>< BsFillXCircleFill style={styles.textCenter} onClick={() => deleteClick(i)} /></td>
                    <td style={styles.textCenter}>{row.subCode}</td>
                    <td>{row.semester}</td>
                    <td style={styles.textRight}>{row.subName}</td>
                    <td style={styles.textRight}>{row.grade}</td>
                </tr>
            )
        } else {
            return (
                null
            )
        }

    }

    useEffect(() => {
        let totalGPA = 0
        let n = 0
        data.map((v) => {
            n += 3
            totalGPA += v.gpa
        });
        totalGPA = totalGPA * 3
        totalGPA = totalGPA / n
        totalGPA = Math.round(totalGPA * 100) / 100

        console.log("GPAC", totalGPA)
        setTotalGPA(totalGPA)

    }, [data]);

    const clearTable = () => {
        setDataItems([]);
    };

    const deleteClick = (i) => {
        console.log(i);
        data.splice(i, 1)
        setDataItems([...data])
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Grade List</h1>
                </Col>
                <Col style={styles.textRights, { paddingTop: "7px" }}>
                    <Button onClick={clearTable} variant="dark" style={{ float: "right" }}>Clear</Button>
                </Col>
	    </Row>
	    
            <Row style={{paddingBottom:10}}> 
                <Col style={{ paddingTop: "7px" }}> GPAC: {totalGPA}
                </Col>
            </Row>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 1/2020</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="1/2020" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                     <tr> 
 			<th scope="col" colSpan="1">Semester 2/2020</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="2/2020" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 3/2020</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="3/2020" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 1/2021</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="1/2021" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 2/2021</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="2/2021" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                 <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 3/2021</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="3/2021" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 1/2022</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="1/2022" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 2/2022</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="2/2022" />
                    ))}
                </tbody>
            </Table>

            <Table style={{background: "#FFFFFF",  borderRadius: "10px", borderColor: "black"}}>
                <thead>
                    <tr> 
 			<th scope="col" colSpan="1">Semester 3/2022</th>
                        <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Course ID</th>
                        <th scope="col" colSpan="3" style={{ textAlign: "center" }}>Course Name</th>
                        <th scope="col" colSpan="4" style={{ textAlign: "right" }}>Grade</th>
		    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <SemTable key={i} row={v} semRow="3/2022"/>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
export default GradeList;
