const mongoose = require('mongoose');
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;

/*    
 HotelEntity[
	Hotel A{
        _HotelID,
        Værelser
        [
        Værelse A
			{
              _id:
			  Gæster: [Bruger1] 
			},
		 Værelse B
			{
              _Id;
			  Gæster: [Bruger2, Bruger 3]
			},
		 Værelse C
 			{
                 _Id
                 Gæster [

                 ]
			}
        ],
	Hotel B...
]

BrugerEntity[
        
    Bruger{
        _id:
    	Navn:
        Rolle:
    }
]

IKKE DATABASE:
RolleEnum:
{
    Admin: 'Admin',
    HotelManager: 'HotelManager',
    Gæst: 'Gæst',
    Bruger: 'Bruger
}
 */