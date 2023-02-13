import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
      
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
      med: {
        marginVertical: 5,   
        height: 165,
        width: '90%',
        padding: 10,
        
       backgroundColor: '#fff',
       borderRadius: 20,
       borderColor:  '#2461d4',
       borderWidth: 5,
    },


    scroll: {
        
        width: '100%',
        paddingLeft: 10, 
      },

    border: {
        margin: 10,
       
        height: '25%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2461d4',
        borderRadius: 10,
       
    },
   

 
    text: {
        backgroundColor: '#FF0',
       fontSize: 16,
        color: '#000'
    },
    textsub: {
        padding: 10,
        color: '#000',
     
    },
    btns: { 
        
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },

    btn_dele: { 
        
        marginVertical: 5,
        padding:1,
        width: '40%',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#b30707',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderColor:  '#000',
        borderWidth: 2,
    },
    btn_edit: { 
        
        marginVertical: 5,
        padding:1,
        width: '40%',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#7B68EE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderColor:  '#000',
        borderWidth: 2,
    },
    textbtn: { 
      
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
        
    }
})