// // PdfTemplate.js
// import React from 'react';
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
// } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: '#EAF6ED',
//     padding: 40,
    
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: '700',
//     marginBottom: 40,
//   },
//   text: {
//     color: 'black',
//   },
//   displayTextBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 5,
//   },
//   displayTextBoxTitle: {
//     textAlign: 'left',
//     marginRight: '2rem', // Updated to 2rem
//     fontWeight: 'bold',
//   },
//   displayTextBoxValue: {
//     textAlign: 'right',
//     backgroundColor: '#fff', // Background color set to #fff
//     padding: 4,
//     width:80,
//   },
// });

// const PdfTemplate = ({ healthData }) => {
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <Text style={styles.title}>Health Report</Text>
//         <View>
//         <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Name:
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Heart Rate:
//             </Text>
//             <Text style={[styles.displayTextBoxValue, styles.text]}>
//               {healthData?.ecg ? healthData?.ecg : '-'} bpm
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Cholesterol Level:
//             </Text>
//             <Text style={[styles.displayTextBoxValue, styles.text]}>
//               {healthData?.cholesterol ? healthData?.cholesterol : '-'} mg/dL
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Blood Pressure:
//             </Text>
//             <Text style={[styles.displayTextBoxValue, styles.text]}>
//               {healthData?.bloodPressure ? healthData?.bloodPressure : '-'} mm Hg
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Glucose Level:
//             </Text>
//             <Text style={[styles.displayTextBoxValue, styles.text]}>
//               {healthData?.glucoseLevel ? healthData?.glucoseLevel : '-'} mg/dL
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Weight:
//             </Text>
//             <Text style={[styles.displayTextBoxValue, styles.text]}>
//               {healthData?.weight ? healthData?.weight : '-'} kg
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Height:
//             </Text>
//             <Text style={[styles.displayTextBoxValue, styles.text]}>
//               {healthData?.height ? healthData?.height : '-'} cm
//             </Text>
//           </View>
//           <View style={styles.displayTextBox}>
//             <Text style={[styles.displayTextBoxTitle, styles.text]}>
//               Overall Health:
//             </Text>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default PdfTemplate;
