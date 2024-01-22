import { List, ListItem, ListItemButton as MuiListItemButton, Typography, styled } from '@mui/material'
import { Drafts as DraftsIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material'

import { Page } from 'components/templates'

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  h6: {
    color: theme.palette.text.secondary,
  },
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    h6: {
      color: theme.palette.primary.dark,
    },
  },
}))

const ContactPage = () => {
  return (
    <Page title="Contacts">
      <Typography align="left" variant="h6">
        Feel free to contact me using any of the following:
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => window.open('mailto:michele.tartari+web@live.com', '_blank')}>
            <DraftsIcon fontSize="large" />
            <Typography variant="h6" ml={2}>
              michele.tartari+web@live.com
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => window.open('https://www.linkedin.com/in/m-tartari/', '_blank')}>
            <LinkedInIcon fontSize="large" />
            <Typography variant="h6" ml={2}>
              m-tartari
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => window.open('https://www.github.com/m-tartari/', '_blank')}>
            <GitHubIcon fontSize="large" />
            <Typography variant="h6" ml={2}>
              m-tartari
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Page>
  )
}

export default ContactPage
