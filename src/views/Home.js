import React, { useEffect } from "react";

const Home = props => {
    //props.setStudents(['Different Students']);
    let addStudent=() =>{
        let newStudents=[...props.students];
        newStudents.push('Lionel Messi');
        props.setStudents(newStudents);
    }
    useEffect(()=>{
        console.log(`Rendered or rerendered Home! Number of Students: ${props.students.length}.`);
    })

    return (
        <div className='home'>
            <h1>This will be the Homepage</h1>
            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-6">
                        <table className='table'>
                            <thread>
                                <tr>
                                    <th>Soccer Players</th>
                                </tr>
                               <tr>
                                    <th><button type="button" class="btn btn-primary" onClick={addStudent}>Add a Student</button></th>
                                    </tr>
                            </thread>
                            <tbody>
                                {   props.students.map((student, index) => {
                                    return <tr key={index}><td>{student}</td></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default Home;