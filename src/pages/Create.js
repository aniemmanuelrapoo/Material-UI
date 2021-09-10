import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core'; 
import { Container } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn:{
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: "blue"
        }
    },
    title:{
        textDecoration: 'underline',
        marginBottom: 20
    }
})

export default function Create() {
    const classes = useStyles()
    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
                className={classes.title}
            >
                Create a New Note
            </Typography>

               

            <Button type="submit">Submit</Button>
            <Button type="submit" color="secondary" variant="outlined">Submit</Button>
            <ButtonGroup color="primary" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup><br /><br /><br /><br />

             <Button
                onClick={() => alert("you clicked me")}
                className={classes.btn}
                variant="contained"
                color="secondary"
                type="submit"
                startIcon={<SendIcon/>}
                endIcon={<KeyboardArrowRightIcon />}
                >
                Submit
            </Button><br /><br />
            {/* icons */}
            <AcUnitOutlinedIcon />
            <AcUnitOutlinedIcon color="primary" fontSize="large" />
            <AcUnitOutlinedIcon color="secondary" fontSize="small" />
            <AcUnitOutlinedIcon color="action" fontSize="small" />
            <AcUnitOutlinedIcon color="error" fontSize="small" />
            <AcUnitOutlinedIcon color="disabled" fontSize="small" />
        </Container>
    )
}
