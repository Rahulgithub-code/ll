import { Injectable } from '@angular/core';
import { Address } from './address';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  company: Company[] = [
    { id: 1, name: 'Google', sector: 'IT' },
    { id: 2, name: 'Amazon', sector: 'IT' },
    { id: 3, name: 'FlipKart', sector: 'IT' },
    { id: 4, name: 'TCS', sector: 'IT, Consulting' },
    { id: 5, name: 'Infosys', sector: 'IT & Consulting' },
    { id: 6, name: 'Wipro Limited', sector: 'IT' },
    { id: 7, name: 'Tech Mahindra Ltd', sector: 'IT' },
    { id: 8, name: 'accenture solutions pvt ltd', sector: 'IT' },
    { id: 9, name: 'Cognizant', sector: 'IT & Consulting' },
    { id: 10, name: 'IBM', sector: 'IT' },
    { id: 11, name: 'Oracle Corporation', sector: 'IT' },
    { id: 12, name: 'DXC Technology', sector: 'IT' },
    { id: 13, name: 'Salesforce', sector: 'IT' },
    { id: 14, name: 'Microsoft Corporation', sector: 'IT' },
    { id: 15, name: 'Deloitte', sector: 'IT, Audit, Consulting & Tax Service' }
  ]

  address: Address[] = [
    { id: 1, address: 'SP Infocity M G R Salai, Perungudi Kandanchavady', city: 'Chennai', state: 'Tamil Nadu', zipcode: 600096, c_id: 1 },
    { id: 2, address: 'Buildings Alyssa, Begonia and Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village', city: 'Bengaluru', state: 'Karnataka', zipcode: 560103, c_id: 1},
    { id: 3, address: 'Unitech Signature Tower-II, Sector-15, Part-II Village Silokhera', city: 'Gurgaon', state: 'Delhi', zipcode: 122001, c_id: 1 },
    { id: 4, address: 'Sahyadri Park, Plot No. 2 & 3, Rajiv Gandhi Infotech Park, Phase-III, Hinjewadi', city: 'Pune', state: 'Maharashtra', zipcode: 411057, c_id: 2 },
    { id: 5, address: 'No.44 & 97/A, Infosys Avenue, Hosur Road, Electronic City', city: 'Bangalore ', state: 'Karnataka', zipcode: 560100 , c_id: 2},
    { id: 6, address: '1, 7, 8 & 9, DM Block, Sector V, Bidhannagar', city: 'Kolkata', state: 'West Bengal', zipcode: 700091, c_id: 2 },
    { id: 7, address: 'LGF + 6th floor, Tech Boulevard, Sec-127', city: 'Noida', state: 'Delhi', zipcode: 201301, c_id: 3 },
    { id: 8, address: 'Pritech Park (SEZ) Block 7, Outer Ring Road, Bellandur Village, Varthur Hobli', city: 'Bangalore', state: 'Karnataka', zipcode: 560103 , c_id: 4},
    { id: 9, address: 'Kensington Building Hiranandani Business Park, Powai Mumbai', city: 'Pune', state: 'Maharashtra', zipcode: 411057, c_id: 4 },
    { id: 10, address: 'Gwal Pahari Village, BandhwariGwal Pahari', city: 'Gurgaon', state: 'Delhi', zipcode: 122005, c_id: 4},
    { id: 11, address: 'Embassy Business Park C V Raman Nagar', city: 'Bengaluru', state: 'Karnataka ', zipcode: 560093 , c_id: 5},
    { id: 12, address: 'EC1 Campus Phase-1, HP Avenue, 39/40, Electronics City, Hosur Road', city: 'Bengaluru ', state: 'Karnataka', zipcode: 560100, c_id: 6 },
    { id: 13, address: 'Floor 3, Torrey Pines, Embassy Golf Links Business Park, Challaghatta,', city: 'Bengaluru', state: 'Karnataka', zipcode: 560071 , c_id: 6 },
    { id: 14, address: 'Vatika Business Centre 3rd Floor, NSL Icon, Road No: 12, Banjara Hills', city: '', state: 'Hyderabad', zipcode: 500034 , c_id: 6 },
    { id: 15, address:'BPTP Crest, Plot No.15,Â Udyog- Vihar, Phase-IV', city:'Gurgaon', state:'Delhi', zipcode:122015, c_id: 6 }
  ]
}