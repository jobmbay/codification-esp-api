/**
 * Created by jobmbay on 1/25/18.
 */

module.exports = function(app) {
  var created = true;

  if(created==false)
  {
    var models = app.models

    // creation des departements et des options
    models.Departement.create([
      {
        label:"Genie Informatique"
      },
      {
        label:"Genie Civil"
      },
      {
        label:"Genie Mecanique"
      },
      {
        label:"Genie Electrique"
      },
      {
        label:"Genie CBA"
      },
      {
        label:"Gestion"
      }
    ], function (err, departements, next) {
      if(err) throw err;
      console.log(departements)
      models.Option.create([
        {
          departementId:departements[0].id,label:"Informatique"
        },
        {
          departementId:departements[0].id,label:"Reseau et Télecomunication"
        },
        {
          departementId:departements[1].id,label:"Civil"
        },
        {
          departementId:departements[2].id,label:"Mecanique"
        },
        {
          departementId:departements[3].id,label:"Electrique"
        },
        {
          departementId:departements[4].id,label:"Chimique"
        },
        {
          departementId:departements[4].id,label:"Biologie Appliqué"
        },
        {
          departementId:departements[4].id,label:"Industrie Alimentaire"
        },
        {
          departementId:departements[5].id,label:"FC"
        },
        {
          departementId:departements[5].id,label:"TC"
        }

      ], function (err, options) {
        if(err) throw err;
        console.log(options);
        //creations des niveaux
        models.Niveau.create([
          {
            numero:"1"
          },
          {
            numero:"2"
          },
          {
            numero:"3"
          }
        ], function (err, niveaux) {
          if(err) throw err;
          console.log(niveaux);
          models.Cycle.create([
            {
              nbNiveau: 2,label:"DUT"
            },
            {
              nbNiveau:3,label:"DIC"
            },
            {
              nbNiveau:3,label:"DESCAF"
            }
          ], function (err, options) {
            if(err) throw err;
            console.log(options);
          })
        })
      })
    })
  }
};

