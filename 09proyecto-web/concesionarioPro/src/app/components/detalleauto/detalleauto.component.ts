import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'detalleauto',
  templateUrl: './detalleauto.component.html',
  styleUrls: ['./detalleauto.component.css'],
  providers:[AutoService]
})
export class DetalleautoComponent implements OnInit {
  public url:string;
  public auto:Auto;
  public confirm:boolean;

  constructor(
    private _autoService:AutoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
    this.auto=new Auto('','','','','',2021,100,"");
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
        let id=params['id'];
        console.log(id);
        this.getAuto(id);
      }
    );
  }

  getAuto(id:String){
    this._autoService.getAuto(id).subscribe(
      response=>{
        this.auto=response.auto;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }

  borrarAuto(id:string){
    this._autoService.deleteAuto(id).subscribe(
      response=>{
        if(response.auto){
          this._router.navigate(['/autos']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }


}
