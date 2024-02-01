<script lang="ts" setup>
let placesWithAddr={
    'Boardwalk Condos':{
        Address:'',
    },
    'City Hall':{
        Address:'1 King St W, Brockville, ON K6V 7A5',
    },
    'Gord Watts':{
        Address:'251 North Augusta Road, Brockville, ON K6V 2V1',
    },
    'LCC':{
        Address:'9 Broad St, Brockville, ON',
    },
    'CRS':{
        Addesss:'701 Central Ave. West Brockville, ON, K6V 5W1',
    },
    'Beattie Dodge':{
        Address:'8 Chase St, Brockville ON',
    },
    'Axens':{
        Address:'4000 Development Dr, Brockville, ON K6V 5V5',
    },
    'Upper Canada Medical':{
        Address:'100 Strowger Blvd Suite 110 Entrance 2B, Brockville, ON K6V 5J9',
    },
    'Weatherheaven':{
        Address:'100 Strowger Blvd Suite 117, Brockville, ON K6V 5J9',
    },
    'Canada Post':{
        Address:'34 Buell St, Brockville, ON K6V 0A0',
    },
    'Beeclean 2495':{
        Address:'2495 PARKDALE AVE City BROCKVILLE State ON Zip K6V 3H2',
    },
    'Beeclean 2211':{
        Address:'2211 PARKDALE AVE. City BROCKVILLE State ON Zip K6V 6M2',
    },
    'Beeclean 2479':{
        Address:'2479 PARKDALE AVE. BROCKVILLE ON, K6V 3H2',
    },
    '845 kyle court condo brockville':{
        Address:'Brockville ON K6V 6K7, Canada',
    },
    'Beeclean 555':{
        Address:'555 CALIFORNIA AVE City BROCKVILLE State ON Zip K6V 7N6',
    },
    'St Johns Daycare':{
        Address:'12 Durham St, Brockville, ON',
    },
    'Allstate':{
        Address:'11 Windsor Dr',
    },
    'Canarm':{
        Address:'2157 PARKDALE AVE.',
    },
    'Fulford Museum':{
        Address:'287 King St, Brockville, ON',
    },
    'Medigas':{
        Address:'10-555 CALIFORNIA AVE',
    },
    'Beeclean 333':{
        Address:'333 CALIFORNIA AVE City BROCKVILLE State ON Zip K6V 7V6',
    },
    'Vanzuylen':{
        Address:'LCD Main',
    },
    'Sunbelt':{
        Address:'',
    },
    'Oakland Cemetry':{
        Address:'1524 Highway #2 Brockville ON',
    },
    'Robillard Hearing':{
        Address:'2211 PARKDALE Ave, Brockville, ON, K6V 6B2',
    },
    'Enterprise':{
        Address:'1220 Stewart Blvd, Brockville, ON',
    },
    'Nedco':{
        Address:'333 CALIFORNIA Ave',
    },
    '401 Electric':{
        Address:'',
    },
    'Etfo':{
        Address:'555 CALIFORNIA Ave., Unit 9, Brockville, ON, 5V6',
    },
    'Wolsley':{
        Address:'',
    },
    'HomeWood':{
        Address:'',
    },
    'Leeds Condo #36':{
        Address:'Brockville, ON K6V 6J7 ????? XXX',
    },
    'Leeds Condo #34':{
        Address:'Brockville, ON K6V 6H6',
    },
    'Leeds Condo #37':{
        Address:'Brockville, ON K6V 6H7',
    },
}
</script>

<template>
    <h1>Places with Address</h1>
    <table>
        <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
        <tr>
            <td> Boardwalk Condos<br> {{placesWithAddr['Boardwalk Condos'].Address}}</td>
            <td> Boardwalk Condos<br> {{placesWithAddr['Boardwalk Condos'].Address}}</td>
            <td> Boardwalk Condos<br> {{placesWithAddr['Boardwalk Condos'].Address}}</td>
            <td> Boardwalk Condos<br> {{placesWithAddr['Boardwalk Condos'].Address}}</td>
            <td> Boardwalk Condos<br> {{placesWithAddr['Boardwalk Condos'].Address}}</td>
            <td></td>
            <td> Axens <br> {{placesWithAddr['Axens'].Address}}</td>
        </tr>
        <tr>
            <td> Weatherheaven AM<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td></td>
            <td> Upper Canada Medical <br> {{placesWithAddr['Upper Canada Medical'].Address}} </td>
        </tr>
        <tr>
            <td> 845 kyle court condo brockville <br> {{placesWithAddr['845 kyle court condo brockville'].Address}} </td>
            <td> 810/815 kyle court condo brockville <br> {{placesWithAddr['845 kyle court condo brockville'].Address}} </td>
            <td> 845 kyle court condo brockville <br> {{placesWithAddr['845 kyle court condo brockville'].Address}} </td>
            <td> 810/815 kyle court condo brockville <br> {{placesWithAddr['845 kyle court condo brockville'].Address}} </td>
            <td> 845 kyle court condo brockville <br> {{placesWithAddr['845 kyle court condo brockville'].Address}} </td>
            <td></td>
            <td> Beattie Dodge <br> {{placesWithAddr['Beattie Dodge'].Address}} </td>
        </tr>
        <tr>
            <td> Weatherheaven PM<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven PM<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven PM<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven PM<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td> Weatherheaven PM<br> {{placesWithAddr['Weatherheaven'].Address}} </td>
            <td></td>
            <td> Vanzuylen<br> {{placesWithAddr['Vanzuylen'].Address}} </td>
        </tr>
        <tr>
            <td> City Hall<br> {{placesWithAddr['City Hall'].Address}} </td>
            <td> City Hall<br> {{placesWithAddr['City Hall'].Address}} </td>
            <td> City Hall<br> {{placesWithAddr['City Hall'].Address}} </td>
            <td> City Hall<br> {{placesWithAddr['City Hall'].Address}} </td>
            <td> City Hall<br> {{placesWithAddr['City Hall'].Address}} </td>
            <td></td>
            <td> Enterprise<br> {{placesWithAddr['Enterprise'].Address}} </td>
        </tr>
        <tr>
            <td> Gord Watts<br> {{placesWithAddr['Gord Watts'].Address}} </td>
            <td> Gord Watts<br> {{placesWithAddr['Gord Watts'].Address}} </td>
            <td> Gord Watts<br> {{placesWithAddr['Gord Watts'].Address}} </td>
            <td> Gord Watts<br> {{placesWithAddr['Gord Watts'].Address}} </td>
            <td> Gord Watts<br> {{placesWithAddr['Gord Watts'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Axens<br> {{placesWithAddr['Axens'].Address}} </td>
            <td> Axens<br> {{placesWithAddr['Axens'].Address}} </td>
            <td> Axens<br> {{placesWithAddr['Axens'].Address}} </td>
            <td> Axens<br> {{placesWithAddr['Axens'].Address}} </td>
            <td> Axens<br> {{placesWithAddr['Axens'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Fulford<br> {{placesWithAddr['Fulford Museum'].Address}} </td>
            <td> Beattie Dodge<br> {{placesWithAddr['Beattie Dodge'].Address}} </td>
            <td> Allstate<br> {{placesWithAddr['Allstate'].Address}} </td>
            <td> Beattie Dodge<br> {{placesWithAddr['Beattie Dodge'].Address}} </td>
            <td> Fulford<br> {{placesWithAddr['Fulford Museum'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Upper Canada Medical<br> {{placesWithAddr['Upper Canada Medical'].Address}} </td>
            <td> Upper Canada Medical<br> {{placesWithAddr['Upper Canada Medical'].Address}} </td>
            <td> Upper Canada Medical<br> {{placesWithAddr['Upper Canada Medical'].Address}} </td>
            <td> Upper Canada Medical<br> {{placesWithAddr['Upper Canada Medical'].Address}} </td>
            <td> Upper Canada Medical<br> {{placesWithAddr['Upper Canada Medical'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> St Johns Daycare<br> {{placesWithAddr['St Johns Daycare'].Address}} </td>
            <td> St Johns Daycare<br> {{placesWithAddr['St Johns Daycare'].Address}} </td>
            <td> St Johns Daycare<br> {{placesWithAddr['St Johns Daycare'].Address}} </td>
            <td> St Johns Daycare<br> {{placesWithAddr['St Johns Daycare'].Address}} </td>
            <td> St Johns Daycare<br> {{placesWithAddr['St Johns Daycare'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Beeclean 2211<br> {{placesWithAddr['Beeclean 2211'].Address}} </td>
            <td> Beeclean 2211<br> {{placesWithAddr['Beeclean 2211'].Address}} </td>
            <td> Beeclean 2211<br> {{placesWithAddr['Beeclean 2211'].Address}} </td>
            <td> Beeclean 2211<br> {{placesWithAddr['Beeclean 2211'].Address}} </td>
            <td> Beeclean 2211<br> {{placesWithAddr['Beeclean 2211'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Beeclean 2479<br> {{placesWithAddr['Beeclean 2479'].Address}} </td>
            <td> Beeclean 2479<br> {{placesWithAddr['Beeclean 2479'].Address}} </td>
            <td> Beeclean 2479<br> {{placesWithAddr['Beeclean 2479'].Address}} </td>
            <td> Beeclean 2479<br> {{placesWithAddr['Beeclean 2479'].Address}} </td>
            <td> Beeclean 2479<br> {{placesWithAddr['Beeclean 2479'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Beeclean 2495<br> {{placesWithAddr['Beeclean 2495'].Address}} </td>
            <td> Beeclean 2495<br> {{placesWithAddr['Beeclean 2495'].Address}} </td>
            <td> Beeclean 2495<br> {{placesWithAddr['Beeclean 2495'].Address}} </td>
            <td> Beeclean 2495<br> {{placesWithAddr['Beeclean 2495'].Address}} </td>
            <td> Beeclean 2495<br> {{placesWithAddr['Beeclean 2495'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Allstate<br> {{placesWithAddr['Allstate'].Address}} </td>
            <td> Medigas<br> {{placesWithAddr['Medigas'].Address}} </td>
            <td> Canarm<br> {{placesWithAddr['Canarm'].Address}} </td>
            <td></td>
            <td> Allstate<br> {{placesWithAddr['Allstate'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Beeclean 333<br> {{placesWithAddr['Beeclean 333'].Address}} </td>
            <td> Beeclean 333<br> {{placesWithAddr['Beeclean 333'].Address}} </td>
            <td> Beeclean 333<br> {{placesWithAddr['Beeclean 333'].Address}} </td>
            <td> Beeclean 333<br> {{placesWithAddr['Beeclean 333'].Address}} </td>
            <td> Beeclean 333<br> {{placesWithAddr['Beeclean 333'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> Canada Post<br> {{placesWithAddr['Canada Post'].Address}} </td>
            <td> Canada Post<br> {{placesWithAddr['Canada Post'].Address}} </td>
            <td> Canada Post<br> {{placesWithAddr['Canada Post'].Address}} </td>
            <td> Canada Post<br> {{placesWithAddr['Canada Post'].Address}} </td>
            <td> Canada Post<br> {{placesWithAddr['Canada Post'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td> Beeclean 555<br> {{placesWithAddr['Beeclean 555'].Address}} </td>
            <td></td>
            <td> Canarm<br> {{placesWithAddr['Canarm'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> Medigas<br> {{placesWithAddr['Medigas'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> Etfo<br> {{placesWithAddr['Etfo'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> Nedco<br> {{placesWithAddr['Nedco'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> Oakland Cemetry<br> {{placesWithAddr['Oakland Cemetry'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> Sunbelt<br> {{placesWithAddr['Sunbelt'].Address}} </td>
            <td></td>
            <td></td>
        </tr>
    </table>

</template>

<style lang='scss' scoped>

</style>
