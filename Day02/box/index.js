// import { View, Text } from 'react-native';
// import React from 'react';
// import styles from './styles';

// const Button = () => {
//   return (
//     <View style={styles.containerStyle}>
//       <Text style={styles.buttonTextStyle}>Button</Text>
//     </View>
//   );
// };

// export default Button;

import React from 'react';
 import { View, Text ,StyleSheet} from 'react-native';
import styles from './styles';

function Box({bgColor,title}) {
  return(
    <View style={[styles.containerStyle ,
    {
      backgroundColor:bgColor,
    },
    ]}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  )
}
export default Box ;