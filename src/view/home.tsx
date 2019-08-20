import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <View>

    </View>

  );
}