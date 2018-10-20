import React from 'react'
import Paper from '@material-ui/core/Paper'


export class Gallery extends React.Component {
    render() {
        const images = [
            { path: 'pic1.jpg' }, { path: 'pic2.jpg' }, { path: 'pic3.jpeg' }, { path: 'pic4.jpeg' }
        ]
        return <div
                style={{
                    display: 'grid',
                    gridTemplate: 'repeat(auto-fit,minmax(350px,1fr))/repeat(auto-fit,minmax(350px,1fr))',
                    gridGap: '10px',
                    gridAutoFlow: 'dense',
                    padding: '20px',
                    background: '#4a234f'
                     }}>
            {images.map((img) => {
                return <Paper>
                    <img src={'../../assets/img/' + img.path} style={{width:'100%', padding:'10px' }}/>
                </Paper>
            })}
        </div>
    }
}

