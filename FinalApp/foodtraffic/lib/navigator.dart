import 'package:flutter/material.dart';

class RoleSelection extends StatelessWidget {const RoleSelection({super.key});
  @override
  Widget build(BuildContext context) {    
    const Color red = Color(0xAAC63F43);
    const Color orange = Color(0xAAF8A52D);    
    const Color green =  Color(0xAA77B37F);    

    return const SizedBox(
      height: 70.0,
      child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [          
          SelectedTextButton(
            color: red,            
            label: 'Reciever',
          ),          
          DeselectTextButton(
            color: orange,            
            label: 'Donator',
          ),          
          DeselectTextButton(
            color: green,            
            label: 'Volunteer',
          ),        
        ],
      ),    
    );
  }
}

class SelectedTextButton extends StatelessWidget {
  const SelectedTextButton({
    super.key,    
    required this.color,
    required this.label,    
  });
  final Color color;
  final String label;

  @override  Widget build(BuildContext context) {
    return Container(      
      padding: const EdgeInsets.only(
        bottom: 5, // Space between underline and text      
      ),
      decoration: BoxDecoration(        
        border: Border(bottom: BorderSide(
            color: color,           
            width: 2.0, // Set thickness if selected
        ))      
      ),
      child: Text(        
        label,
        style: TextStyle(          
          fontSize: 20,
          fontWeight: FontWeight.w900,          
          color: color,
        ),      
      ),
    );  
  }
}

class DeselectTextButton extends StatelessWidget {
  const DeselectTextButton({
    super.key,    
    required this.color,
    required this.label,    
  });
  final Color color;
  final String label;

  @override  Widget build(BuildContext context) {
    return Container(      
      padding: const EdgeInsets.only(
        bottom: 5, // Space between underline and text      
      ),
      child: Text(        
        label,
        style: TextStyle(          
          fontSize: 20,
          fontWeight: FontWeight.w900,          
          color: color,
        ),      
      ),
    );  
  }
}