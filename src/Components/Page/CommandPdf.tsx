
import   { Page, Text, View, Document, StyleSheet, Line, Svg} from '@react-pdf/renderer';

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

interface MyCommandListProps{
    listeCommande: {
        commandeId:number,
        client: {
            utilisateurId:number,
            pseudo:string,
        },
        jus:any,
        quantite: number,
        dateLivraison:string,
        periodeLivraison:string,
        lieuLivraison:string
    }[]
}

//Create Document Component
const MyCommandList = (listeCommande:MyCommandListProps) => {
    const listeCommandeArray = listeCommande.listeCommande
    let listeCom = []

    for(let commande in listeCommande.listeCommande){

        let item = <View wrap={false} key={listeCommandeArray[commande].commandeId} style={styles.factureContainer}>
                        <View key={listeCommandeArray[commande].commandeId + 1} style={styles.facture}>
                            <View key={listeCommandeArray[commande].commandeId + 2} style={styles.headFacture}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                                <View style={styles.checkBox}></View>
                            </View>
    
                            <View key={listeCommandeArray[commande].commandeId + 3} style={styles.containerField}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>{listeCommandeArray[commande].commandeId}</Text></View>
                            </View>

                            <View key={listeCommandeArray[commande].commandeId + 4} style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Adresse :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].lieuLivraison}</Text></View>
                            </View>

                            <View key={listeCommandeArray[commande].commandeId + 5} style={styles.containerField} >

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

                            <View key={listeCommandeArray[commande].commandeId + 6} style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>{listeCommandeArray[commande].quantite}-{listeCommandeArray[commande].jus.saveur}(s)</Text></View>
                            </View>

                            <View key={listeCommandeArray[commande].commandeId + 7} style={styles.containerField}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].quantite} Saint(s)</Text></View>
                            </View>
                        </View>

                        <View key={listeCommandeArray[commande].commandeId + 8}>
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

                        <View style={styles.facture} key={listeCommandeArray[commande].commandeId + 10}>
                            <View style={styles.headFacture} key={listeCommandeArray[commande].commandeId + 11}>
                                <View style={styles.title}><Text style={styles.text}>Reçu Commande</Text></View>
                            </View>

                            <View style={styles.containerField} key={listeCommandeArray[commande].commandeId + 12}>
                                <View style={styles.idcommandeItem1}><Text style={styles.text}>Id-Commande :</Text></View>
                                <View style={styles.idcommandeItem2}><Text style={styles.text}>{listeCommandeArray[commande].commandeId}</Text></View>
                            </View>

                            <View style={styles.containerField} key={listeCommandeArray[commande].commandeId + 13}>
                                <View style={styles.id}><Text style={styles.text}>Lieu :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].lieuLivraison}</Text></View>
                            </View>

                            <View key={listeCommandeArray[commande].commandeId + 5} style={styles.containerField} >

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

                            <View style={styles.containerField} key={listeCommandeArray[commande].commandeId + 15}>
                                <View style={styles.id}><Text style={styles.text}>Quantité :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].quantite}-{listeCommandeArray[commande].jus.saveur}(s)</Text></View>
                            </View>
                            
                            <View style={styles.containerField} key={listeCommandeArray[commande].commandeId + 16}>
                                <View style={styles.id}><Text style={styles.text}>Montant :</Text></View>
                                <View style={styles.value}><Text style={styles.text}>{listeCommandeArray[commande].quantite} Saint(s)</Text></View>
                            </View>
                            
                        </View> 
                    </View>
        listeCom.push(item)
    }
 
    return (
        <Document>
            <Page size='A4' wrap={true} style={styles.page} >
                {listeCom.length > 0 ? listeCom : <Text>Aucune Commande à livrer pour l'instant</Text> }
            </Page>
        </Document>
	)
}

export default MyCommandList 
