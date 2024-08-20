import React from "react";
import  ReactPDF, { Page, Text, View, Document, StyleSheet, Image, Line, Svg} from '@react-pdf/renderer';

import jsPDF from "jspdf";


const styles = StyleSheet.create({
    
    page: {
        backgroundColor: 'white',
        padding:"1cm",
    },

    text: {
        fontSize: 10,
        textAlign: 'left',
        fontFamily: 'Times-Roman'
      },

    factureContainer: {
        width: "19cm",
        height: "5.04cm",
        display: "flex",
        flexDirection:'row',
        justifyContent: "space-between",
        marginBottom: "0.5cm"
    },

    facture: {
        width: '9cm',
        //border: 'black 0.2cm solid',
        borderTop: 1,
        borderBottom : 1,
        borderLeft: 1,
        borderRight: 1,
        borderColor: 'black',
        borderTopLeftRadius: '10pt',
        borderTopRightRadius: '10pt',
        borderBottomRightRadius: '10pt',
        borderBottomLeftRadius: '10pt',
        padding: '0.1cm',
    },


    line :{
        border: "dashed 1px black",
        marginLeft:'auto',
        marginRight:'auto',
    },

    
    verticalLine: {
        border: 'dashed 1px black'
    },

    headFacture: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    checkBox: {
        width: '0.5cm',
        height: '0.5cm',
        border: '1px solid black',
    },

    title: {
        textDecorationStyle: 'underline',
    },

    idcommandeItem1:{
        width: '40%',
    },

    idcommandeItem2:{
        width: '60%',
    },

    containerField: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom:'0.01cm',
        borderBottomColor : 'black',

        //marginBottom: '0.5cm',
    },

    id:{
        width: '20%',
    },
    value:{
        width: '80%',
    },

    separateur0 :{
        display:'flex',
        justifyContent:'space-between',
        width: '50%'
    },
    separateur :{
        display:'flex',
        justifyContent:'space-between',
        width: '35%'
    },
    separateur1 :{
        display:'flex',
        justifyContent:'space-between',
        width: '35%'
    },
    separateur2 :{
        display:'flex',
        justifyContent:'space-between',
        width: '30%'
    },
    separateurLeft :{
        width: '40%'
    },
    separateurRight :{
        width: '60%'
    }
})


const command =  [
    <View>
        <View key={1} style={styles.factureContainer}>
        <View style={styles.facture}>
            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                <View style={styles.checkBox}></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
            </View>

            <View style={styles.containerField} debug={true}>

                <View style={styles.separateur}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                </View>
                <View style={styles.separateur1}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                </View>
                {/*<View style={styles.separateur2}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                </View>*/}
                
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>

        </View>
        

        <View style={styles.facture}>
            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                {/*<View style={styles.checkBox}></View>*/}
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
            </View>
            
            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>
            
        </View>
                         
        </View>

        <View key={2} style={styles.factureContainer}>
        <View style={styles.facture}>

            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                <View style={styles.checkBox}></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
            </View>

            <View style={styles.containerField} debug={true}>

                <View style={styles.separateur}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                </View>
                <View style={styles.separateur1}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                </View>
                {/*<View style={styles.separateur2}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                </View>*/}
                
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>

        </View>
        

        <View style={styles.facture}>
            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                {/*<View style={styles.checkBox}></View>*/}
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
            </View>
            
            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>
            
        </View>
                         
        </View>

        <View key={5} style={styles.factureContainer}>
        <View style={styles.facture}>

            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                <View style={styles.checkBox}></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
            </View>

            <View style={styles.containerField} debug={true}>

                <View style={styles.separateur}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                </View>
                <View style={styles.separateur1}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                </View>
                {/*<View style={styles.separateur2}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                </View>*/}
                
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>

        </View>
        

        <View style={styles.facture}>
            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                {/*<View style={styles.checkBox}></View>*/}
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
            </View>
            
            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>
            
        </View>
                         
        </View>

        <View key={7} style={styles.factureContainer}>
        <View style={styles.facture}>

            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                <View style={styles.checkBox}></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
            </View>

            <View style={styles.containerField} debug={true}>

                <View style={styles.separateur}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                </View>
                <View style={styles.separateur1}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                </View>
                {/*<View style={styles.separateur2}>
                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                    <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                </View>*/}
                
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>

        </View>
        

        <View style={styles.facture}>
            <View style={styles.headFacture}>
                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                {/*<View style={styles.checkBox}></View>*/}
            </View>

            <View style={styles.containerField}>
                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
            </View>

            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
            </View>
            
            <View style={styles.containerField}>
                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
            </View>
            
        </View>
                         
        </View>
    </View>
    
    

    
]

//Create Document Component
const MyCommandList = () => (
		
            <Document>
                <Page size='A4'  style={styles.page} debug={true}>
                    <View key={0}style={styles.factureContainer}>
                        <View style={styles.facture}>

                            <View style={styles.headFacture}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                                <View style={styles.checkBox}></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
                            </View>

                            <View style={styles.containerField} debug={true}>

                                <View style={styles.separateur}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                                </View>
                                <View style={styles.separateur1}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                                </View>
                                {/*<View style={styles.separateur2}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                                </View>*/}
                                
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
                            </View>

                        </View>
                        
                        <Svg height={800} width={10} style={styles.line}>
                            <Line 
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={813}
                                strokeWidth={2}
                                stroke="black"
                            />
                        </Svg>

                        <View style={styles.facture}>
                            <View style={styles.headFacture}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                                {/*<View style={styles.checkBox}></View>*/}
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
                            </View>
                            
                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
                            </View>
                            
                        </View> 
                    </View>

                    <View key={14}style={styles.factureContainer}>
                        <View style={styles.facture}>

                            <View style={styles.headFacture}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                                <View style={styles.checkBox}></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
                            </View>

                            <View style={styles.containerField} debug={true}>

                                <View style={styles.separateur}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                                </View>
                                <View style={styles.separateur1}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                                </View>
                                {/*<View style={styles.separateur2}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                                </View>*/}
                                
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
                            </View>

                        </View>
                        

                        <View style={styles.facture}>
                            <View style={styles.headFacture}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                                {/*<View style={styles.checkBox}></View>*/}
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
                            </View>

                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
                            </View>
                            
                            <View style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
                            </View>
                            
                        </View>
                         
                    </View>

                    {command}
                </Page>
			</Document>
	)

        
export default MyCommandList 




//ReactPDF.render(<MyCommandList />, `${__dirname}/ListeCommande.pdf`);

//Style of the Doc
{/*<Document>
            //<Page size='A4'  style={styles.page} >//
                <View style={styles.factureContainer}>
                    <View style={styles.facture}>
                        <View style={styles.headFacture}>
                            <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                            <View style={styles.checkBox}></View>
                        </View>

                        <View style={styles.containerField}>
                            <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                            <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                        </View>

                        <View style={styles.containerField}>
                            <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
                        </View>
                        
                    </View>

                    <View style={styles.facture}>
                        <View style={styles.headFacture}>
                            <View style={styles.title}></View>
                            <View style={styles.checkBox}></View>
                        </View>

                        <View style={styles.containerField}>
                            <View style={styles.id}><Text style={styles.text}>Id-Commande :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                        </View>

                        
                    </View>
                </View>
                {/*<View>
                    <View style={styles.factureContainer}>
                        <View style={styles.facture}>
                            <View style={styles.headFacture}>
                                <View style={styles.title}></View>
                                <View style={styles.checkBox}></View>
                            </View>
                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text>XXXXXXXXXXXXXXX</Text></View>
                            </View>
                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text>Lieu :</Text></View>
                                <View style={styles.idcommandeItem2}><Text>EKOUNOU carefour 697992631</Text></View>
                            </View>
                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text>Client :</Text></View>
                                <View style={styles.idcommandeItem2}><Text>Zosh237</Text></View>
                            </View>
                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text>Quantité :</Text></View>
                                <View style={styles.idcommandeItem2}><Text>05 Ananas</Text></View>
                            </View>
                            <View style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text>Montant :</Text></View>
                                <View style={styles.idcommandeItem2}><Text>05 Saints</Text></View>
                            </View>
                        </View>
                        <View style={styles.verticalLine}></View>
                    </View>
                    <View style={styles.line}>

                    </View>
                </View>
            //</Page>*/}
        //</Document>


/*const styles = StyleSheet.create({
    
    page: {
        backgroundColor: 'white',
        padding:"1cm",
        borderTopLeftRadius:'1.5pt',
        borderTopRightRadius: '1.5pt'
    },

    text: {
        //margin: 12,
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },

    factureContainer: {
        width: "19cm",
        height: "5.04cm",
        display: "flex",
        flexDirection:'row',
        justifyContent: "space-between",
        border:"1pt solid black"
    },

    facture: {
        width: '9cm',
        border: 'black 2pt solid',
        borderTopLeftRadius: '10pt',
        borderTopRightRadius: '10pt',
        borderBottomRightRadius: '10pt',
        borderBottomLeftRadius: '10pt',
        padding: '0.2cm',
    },


    line :{
        border: "dashed 1px black",
    },

    
    verticalLine: {
        border: 'dashed 1px black'
    },

    headFacture: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    checkBox: {
        width: '0.5cm',
        height: '0.5cm',
        border: '1px solid black',
    },

    title: {
        textDecorationStyle: 'underline',
    },

    idcommandeItem1:{
        width: '40%',
    },

    idcommandeItem2:{
        width: '60%',
    },

    containerField: {
        display: 'flex',
        flexDirection: 'row'
    },

    id:{
        width: '20%',
    },
    value:{
        width: '80%',
    }
})
    */


{/*<div style={styles.page}>

                <div style={styles.factureContainer}>

                    <div style={styles.facture}>
                        <div style={styles.headFacture}>
                            <div style={styles.title}>Reçu Commande</div>
                            <div style={styles.checkBox}></div>
                        </div>

                        <div style={styles.containerField}>
                            <div style={styles.idcommandeItem1}>Id-Commande :</div>
                            <div style={styles.idcommandeItem2}>XXXXXXXXXXXXXXX</div>
                        </div>

                        <div style={styles.containerField}>
                            <div style={styles.id}>Lieu :</div>
                            <div style={styles.value}>EKOUNOU carefour 697992631</div>
                        </div>

                        <div style={styles.containerField}>
                            <div style={styles.id}>Client :</div>
                            <div style={styles.value}>Zosh237</div>
                        </div>

                        <div style={styles.containerField}>
                            <div style={styles.id}>Quantité :</div>
                            <div style={styles.value}>05 Ananas</div>
                        </div>

                        <div style={styles.containerField}>
                            <div style={styles.id}>Montant :</div>
                            <div style={styles.value}>05 Saints</div>
                        </div>

                    </div>
      
                </div>

                <hr style={styles.line} />
            </div>*/}