import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

// icons 

import ExtensionIcon from '@material-ui/icons/Extension';
import CheckIcon from '@material-ui/icons/Check';
import WorkIcon from '@material-ui/icons/Work'
import ReportIcon from '@material-ui/icons/Report';
import HelpIcon from '@material-ui/icons/Help';

export const optionsMenu = (
    <div>
    <ListItem button>
        <ListItemIcon button>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="New count" /> 
      </ListItem>
      <ListItem button>
        <ListItemIcon button>
          <ExtensionIcon />
        </ListItemIcon>
        <ListItemText primary="Extension" />
      </ListItem>
      <ListItem button>
        <ListItemIcon button>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Done" /> 
      </ListItem>
    </div>
)
export const helpMenu = (
    <div>
    <ListItem button>
    <ListItemIcon button>
      <ReportIcon />
    </ListItemIcon>
    <ListItemText primary="Report error" />
  </ListItem> 
  <ListItem button>
    <ListItemIcon button>
      <HelpIcon />
    </ListItemIcon>
    <ListItemText primary="Help" />
  </ListItem> 
  </div>

)
