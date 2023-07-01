import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';




const urls = [
    { 'id': 1, 'url': 'https://www.youtube.com/embed/Bn62TH0ulps', 'description': ' Props in React Js in Hindi' },
    { 'id': 2, 'url': 'https://www.youtube.com/embed/-vS2RzgbnMc', 'description': ' Basic Spoken English course 2023 | Class -2 | Basic English Speaking Class 2023 | Free English class' },
    { 'id': 3, 'url': 'https://www.youtube.com/embed/kOk4-wb0Yzk', 'description': ' बकरा हलाल हो गया 😜| Family Vlog | Master Ji' },
    { 'id': 4, 'url': 'https://www.youtube.com/embed/Hc18Y_pWRLw', 'description': ' Effective Ways to Make Students Think Innovative' },
    { 'id': 5, 'url': 'https://www.youtube.com/embed/-T84LlW4qDw?controls=0', 'description': ' न्यू यॉर्क में गरीब: शहर और वहां जीने की कोशिश [Poor in New York] | DW Documentary हिन्दी' },
    { 'id': 6, 'url': 'https://www.youtube.com/embed/sfyYX1s0E5U?controls=0', 'description': ' Life in Winter at Village of Talesh Mountains Episode Three | Country Life Series' },
    { 'id': 7, 'url': 'https://www.youtube.com/embed/JIoN76fixMY?controls=0', 'description': ' Cooking tandoori lamb with saffron and vegetables on a snowy winter day!' },
    { 'id': 8, 'url': 'https://www.youtube.com/embed/VZU-EyQfUXQ?controls=0', 'description': 'Italian Style Oven Pizza Making / 이태리 스타일 화덕 피자 만들기 / Korean Western Restaurant' },
    { 'id': 9, 'url': 'https://www.youtube.com/embed/ZASm1rWKhik?controls=0', 'description': ' Psychopath Girl Can Use 100% of Her Brain। Wednesday Explanation' },
    { 'id': 10, 'url': 'https://www.youtube.com/embed/sQFd2wUxSj8?controls=0', 'description': ' Cruella || Suspence Thriller Movie Explained In Hindi @Movies Rewind Hindi 143' },
    { 'id': 11, 'url': 'https://www.youtube.com/embed/sQFd2wUxSj8?controls=0', 'description': ' Cruella || Suspence Thriller Movie Explained In Hindi @Movies Rewind Hindi 143' },
    { 'id': 12, 'url': 'https://www.youtube.com/embed/sQFd2wUxSj8?controls=0', 'description': ' Cruella || Suspence Thriller Movie Explained In Hindi @Movies Rewind Hindi 143' },


]

export const Mycolum = () => {
    return (



        <Container>
            <div className='row'>

                {
                    urls.map(
                        (u) => {
                            return (<div className='col-md-3'>  <iframe width="300" height="250" src={u.url} title="CSS Styling &amp; Importing CSS Files in React JS | Class Vs ClassName in React JS in Hindi in 2020 #14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <br />  <a href={u.url} target="_blank">{u.description} </a>
                            </div>)
                        }
                    )

                }
            </div>
        </Container>














    )
}
