import { Container, Grid, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function TabPanel({ children, value, index, ...other }){
    return (
        <div 
        hidden ={!(value === index)}
        {...other}
        > 
            {(value === index && (children))?children:' '}
        </div>
    );
}
export default function TabbedBooks( {booksCurrReading, booksFinished}) {
    const [value, setValue] = React.useState(0);

    const handleChg = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    let renderBooksCurrentReading,renderBooksFinished;
    const renderWhenEmpty = <Container maxWidth="sm" style={{height:250}}></Container>;
    if(booksCurrReading === undefined || booksCurrReading.length === 0){
        renderBooksCurrentReading = renderWhenEmpty;
    }else{
        renderBooksCurrentReading = booksCurrReading;
    }
    if(booksFinished === undefined || booksFinished.length === 0){
        renderBooksFinished = renderWhenEmpty;
    }else{
        renderBooksFinished = booksFinished;
    }
    return (
      <Container >
          <Container style={{paddingBottom:20}}>
          <Tabs
            value={value}
            onChange={handleChg}
            textColor="primary"
            centered
            >
                    <Tab label="Currently Reading" />
                    <Tab label="Finished Reading" />
                </Tabs>
                </Container>
                <TabPanel value={value} index={0}>
                <Grid container direction="row" justify="center">{renderBooksCurrentReading}</Grid>
                </TabPanel>
                <TabPanel value={value} index={1} >
                <Grid container direction="row" justify="center">  {renderBooksFinished}</Grid>
                </TabPanel>
            
      </Container>  
    );
};
TabbedBooks.args = {
cardsCur: PropTypes.object,
cardsFin: PropTypes.object,
};