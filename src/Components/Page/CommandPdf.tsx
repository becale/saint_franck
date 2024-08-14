import React from "react";
import  ReactPDF, { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

import { PDFViewer } from "@react-pdf/renderer";


//Style of the Doc

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#d3d3d3'
    }
})

const __dirname = "C:/Users/futler/Downloads/" 

//Create Document Component
export const MyCommandList = () => (

        <Document>
                <Page size={'A4'} style={styles.page}>
                <View>
                    <Text>
                        Sectionn #1
                    </Text>
                </View>
                </Page>
        </Document>
)

//ReactPDF.render(<MyCommandList />, `${__dirname}/ListeCommande.pdf`);

export default MyCommandList 