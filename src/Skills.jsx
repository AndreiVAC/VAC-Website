import React from 'react'
import icon from './assets/icon.png';
import { useNavigate } from "react-router-dom";

// 10:36 - 11:10
function Skills() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    return (
        <div>
            <div className='header'>
                <button className="hidden-button" onClick={goHome} >
                    <div class="header-logo">
                        <img src={icon} alt="Team Finder Logo" />
                        <span>TEAM FINDER</span>
                    </div>
                </button>
            </div>
            <div className='sign-up'>
                <form class="sign-up-form">
                    <h1>Skills</h1>
                    <label for="cat">Skill Category:</label>
                    <input type="text" id="skill" title="enter your skill" placeholder="Enter your skill" />
                    <label for="name">Skill Name:</label>
                    <input type="text" id="name" title="enter your skill name" placeholder="Enter your skill name" />
                    <label for="desc" >Description:</label>
                    <input type="text" id="desc" title="enter your description" placeholder="Enter your description" />
                    <label for="desc">Author:</label>
                    <input type="text" id="aut" title="enter your author" placeholder="Enter your author" />
                    <label for="desc">Level:</label>
                    <input type="text" id="level" title="enter your level" placeholder="Enter your level" />
                    <label for="desc">Experience:</label>
                    <input type="text" id="exp" title="enter your experience" placeholder="Enter your experience" />
                    <label for="dept">Department:</label>
                    <div className='dropdown'>
                        <button className='dropbtn' disabled>Departament A</button> {/* will require some onclick function for phone*/}
                        <div class="dropdown-content">
                            <a href='#'>Department A</a>
                            <a href='#'>Department B</a>
                            <a href='#'>Department C</a>
                        </div>
                    </div>
                    <button>Add New Skill</button>
                </form>
                <div className='sign-up-form'>
                    <h1>Existing skills (click to edit):</h1>
                    <button>C++ Programming</button>
                    <button>UI Design</button>
                    <button>FrontEnd Development</button>
                </div>
            </div>
        </div>
    )
}

export default Skills