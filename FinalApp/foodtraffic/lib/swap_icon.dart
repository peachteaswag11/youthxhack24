import 'package:flutter/material.dart';

class ImageButton extends StatefulWidget {
  const ImageButton({super.key});

  @override
  _ImageButtonState createState() => _ImageButtonState();
}

class _ImageButtonState extends State<ImageButton> { 
  Image img = const Image(image: AssetImage('Image/plus.png'), height: 20, width: 20,);
  Image imgUp = Image.asset('Image/plus.png', height: 20, width: 20,); //pressed button path
  Image imgDown = Image.asset('Image/minus.png', height: 20, width: 20,); //unpressed button path

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: img,
      onTap: () {
        setState(() {
          if (img == imgDown){
            img = imgUp;
          }
          else{
            img = imgDown;
          }
          
        });
      },
    );
  }
}