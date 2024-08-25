import React from "react";
import  ReactPDF, { Page, Text, View, Document, StyleSheet, Image, Line, Svg} from '@react-pdf/renderer';

import jsPDF from "jspdf";


const styles = StyleSheet.create({
    
    page: {
        backgroundColor: 'white',
        padding:"1cm",
    },

    text: {
        fontSize: 9,
        textAlign: 'left',
        fontFamily: 'Times-Roman'
      },

    factureContainer: {
        width: "19cm",
        height: "5.04cm",
        display: "flex",
        flexDirection:'row',
        justifyContent: "space-between",
        marginBottom: "0.22cm"
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
    },

    lineFactureContainer:{
        marginBottom:'0.22cm'
    }
})


const command =  [
    <View>
        <View key={3}style={styles.factureContainer}>

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

                <View style={styles.containerField} >

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

            <View >
                <Svg  height={800} width={2} style={styles.line}>
                    <Line 
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={900}
                        strokeWidth={2}
                        stroke="black"
                    />
                </Svg>
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

        <View key={33} style={styles.lineFactureContainer}>
            <Svg  height={2} width={842} style={styles.line}>
                <Line 
                    x1={0}
                    y1={900}
                    x2={900}
                    y2={0}
                    strokeWidth={2}
                    stroke="black"
                />
            </Svg>
        </View>

        <View key={4}style={styles.factureContainer}>
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

                <View style={styles.containerField} >

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

            <View >
                <Svg  height={800} width={2} style={styles.line}>
                    <Line 
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={900}
                        strokeWidth={2}
                        stroke="black"
                    />
                </Svg>
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

        <View key={44} style={styles.lineFactureContainer}>
            <Svg  height={2} width={842} style={styles.line}>
                <Line 
                    x1={0}
                    y1={900}
                    x2={900}
                    y2={0}
                    strokeWidth={2}
                    stroke="black"
                />
            </Svg>
        </View>

        <View key={5}style={styles.factureContainer}>

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

                <View style={styles.containerField} >

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

            <View >
                <Svg  height={800} width={2} style={styles.line}>
                    <Line 
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={900}
                        strokeWidth={2}
                        stroke="black"
                    />
                </Svg>
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

        <View key={55} style={styles.lineFactureContainer}>
            <Svg  height={2} width={842} style={styles.line}>
                <Line 
                    x1={0}
                    y1={900}
                    x2={900}
                    y2={0}
                    strokeWidth={3}
                    stroke="black"
                />
            </Svg>
        </View>

        <View key={6}style={styles.factureContainer}>
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

                <View style={styles.containerField} >

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

            <View >
                <Svg  height={800} width={2} style={styles.line}>
                    <Line 
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={900}
                        strokeWidth={2}
                        stroke="black"
                    />
                </Svg>
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
const MyCommandList = (listeCommande:[]) => {

    /*let listeCommandeAlivrer = listeCommande.listeCommande.map((commande, index)=>{
        return(
            <View key={command.commandeId}>
                <View key={command.commandeId} style={styles.factureContainer}>
                    <View key={command.commandeId + 1} style={styles.facture}>
                        <View key={command.commandeId + 2} style={styles.headFacture}>
                            <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                            <View style={styles.checkBox}></View>
                        </View>

                        <View key={command.commandeId + 3} style={styles.containerField}>
                            <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                            <View style={styles.idcommandeItem2}><Text style={styles.text}>{commande.commandeId}</Text></View>
                        </View>

                        <View key={command.commandeId + 4} style={styles.containerField}>
                            <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>EKOUNOU carrefour SHO 215 697992631</Text></View>
                        </View>

                        <View key={command.commandeId + 5} style={styles.containerField} >

                            <View style={styles.separateur}>
                                <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                                <View style={styles.separateurRight}><Text style={styles.text}>Zosh2371</Text></View>
                            </View>
                            <View style={styles.separateur1}>
                                <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                                <View style={styles.separateurRight}><Text style={styles.text}>Après-Midi</Text></View>
                            </View>
                            <View style={styles.separateur2}>
                                <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                                <View style={styles.separateurRight}><Text style={styles.text}>22-12-2025</Text></View>
                            </View>
                            
                        </View>

                        <View key={command.commandeId + 6} style={styles.containerField}>
                            <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                            <View style={styles.idcommandeItem2}><Text style={styles.text}>05 Ananas</Text></View>
                        </View>

                        <View key={command.commandeId + 7} style={styles.containerField}>
                            <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
                        </View>
                    </View>

                    <View key={command.commandeId + 8}>
                        <Svg  height={800} width={2} style={styles.line}>
                            <Line 
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={900}
                                strokeWidth={2}
                                stroke="black"
                            />
                        </Svg>
                    </View>

                    <View style={styles.facture} key={command.commandeId + 10}>
                        <View style={styles.headFacture} key={command.commandeId + 11}>
                            <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                        </View>

                        <View style={styles.containerField} key={command.commandeId + 12}>
                            <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                            <View style={styles.idcommandeItem2}><Text style={styles.text}>XXXXXXXXXXXXXXX</Text></View>
                        </View>

                        <View style={styles.containerField} key={command.commandeId + 13}>
                            <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>EKOUNOU carefour 697992631</Text></View>
                        </View>

                        <View style={styles.containerField} key={command.commandeId + 14}>
                            <View style={styles.id}><Text style={styles.text}>Client :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>Zosh237</Text></View>
                        </View>

                        <View style={styles.containerField} key={command.commandeId + 15}>
                            <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>05 Ananas</Text></View>
                        </View>
                        
                        <View style={styles.containerField} key={command.commandeId + 16}>
                            <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                            <View style={styles.value}><Text style={styles.text}>05 Saints</Text></View>
                        </View>
                        
                    </View> 
                </View>

                <View key={command.commandeId + 17} style={styles.lineFactureContainer}>
                    <Svg  height={2} width={842} style={styles.line} key={command.commandeId + 18}>
                        <Line 
                            x1={0}
                            y1={900}
                            x2={900}
                            y2={0}
                            strokeWidth={2}
                            stroke="black"
                        />
                    </Svg>
                </View>
            </View>
        )
    })*/

    const listeCommandeArray = listeCommande.listeCommande
        

    let listeCom = []

    for(let commande in listeCommande.listeCommande){

        let item = <View key={command.commandeId} style={styles.factureContainer}>
                        <View key={command.commandeId + 1} style={styles.facture}>
                            <View key={command.commandeId + 2} style={styles.headFacture}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                                <View style={styles.checkBox}></View>
                            </View>
    
                            <View key={command.commandeId + 3} style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>{listeCommandeArray[commande].commandeId}</Text></View>
                            </View>

                            <View key={command.commandeId + 4} style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].lieuLivraison}</Text></View>
                            </View>

                            <View key={command.commandeId + 5} style={styles.containerField} >

                                <View style={styles.separateur}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>{listeCommandeArray[commande].client['pseudo']}</Text></View>
                                </View>
                                <View style={styles.separateur1}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>{listeCommandeArray[commande].periodeLivraison}</Text></View>
                                </View>
                                <View style={styles.separateur2}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>{listeCommandeArray[commande].dateLivraison}</Text></View>
                                </View>
                                
                            </View>

                            <View key={command.commandeId + 6} style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>{listeCommandeArray[commande].quantite}-{listeCommandeArray[commande].jus.saveur}(s)</Text></View>
                            </View>

                            <View key={command.commandeId + 7} style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].quantite} Saint(s)</Text></View>
                            </View>
                        </View>

                        <View key={command.commandeId + 8}>
                            <Svg  height={800} width={2} style={styles.line}>
                                <Line 
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2={900}
                                    strokeWidth={2}
                                    stroke="black"
                                />
                            </Svg>
                        </View>

                        <View style={styles.facture} key={command.commandeId + 10}>
                            <View style={styles.headFacture} key={command.commandeId + 11}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                            </View>

                            <View style={styles.containerField} key={command.commandeId + 12}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>{listeCommandeArray[commande].commandeId}</Text></View>
                            </View>

                            <View style={styles.containerField} key={command.commandeId + 13}>
                                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].lieuLivraison}</Text></View>
                            </View>

                            <View key={command.commandeId + 5} style={styles.containerField} >

                                <View style={styles.separateur}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Client :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>{listeCommandeArray[commande].client['pseudo']}</Text></View>
                                </View>
                                <View style={styles.separateur1}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Période :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>{listeCommandeArray[commande].periodeLivraison}</Text></View>
                                </View>
                                <View style={styles.separateur2}>
                                    <View style={styles.separateurLeft}><Text style={styles.text}>Date :</Text></View>
                                    <View style={styles.separateurRight}><Text style={styles.text}>{listeCommandeArray[commande].dateLivraison}</Text></View>
                                </View>
                                
                            </View>

                            <View style={styles.containerField} key={command.commandeId + 15}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].quantite}-{listeCommandeArray[commande].jus.saveur}(s)</Text></View>
                            </View>
                            
                            <View style={styles.containerField} key={command.commandeId + 16}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].quantite} Saint(s)</Text></View>
                            </View>
                            
                        </View> 
                    </View>
        listeCom.push(item)
    }
 

    return (
        <Document>
            <Page size='A4' style={styles.page} wrap={true}>
                {listeCom.length > 0 ? listeCom : <Text>Aucune Commande à livrer pour l'instant</Text> }
            </Page>
        </Document>
	)
}

        
export default MyCommandList 
{/*command*/}