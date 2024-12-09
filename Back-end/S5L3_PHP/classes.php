<?php

class Form{
    private $action;
    private $method;
    private $fields = [];
    private $buttons = [];
    function __construct($action='', $method=''){
        $this->action = $action;
        $this->method = $method;
    }
    public function addFields($type, $name, $placeholder, $attributes=[]){
        $field = [
            'type' => $type,
            'name' => $name,
            'placeholder' => $placeholder,
            'attributes' => $attributes
        ];
        $this->fields[] = $field;
    }
    public function submitButton($type, $text, $attributes=[]){
        $button = [
            'type' => $type,
            'text' => $text,
            'attributes' => $attributes
        ];
        $this->buttons[] = $button;
    }
    public function generateForm(){
        $form = "<form action='$this->action' method='$this->method'>";

        foreach($this->fields as $field){
            $form .= '<input type="' . $field['type'] . '" name="' . $field['name'].'" placeholder="' . $field['placeholder'].'" ';
            foreach($field['attributes'] as $key=>$value){
                $form .= $key . '="' . $value . '" ';
            }
            $form .= '><br>';
        }
        foreach($this->buttons as $button){
            $form .= '<button type="'.$button['type'].'" ';
            foreach($button['attributes'] as $key=>$value){
                $form .= $key . '="' . $value . '" ';
            }
            $form .= '>'.$button['text'].'</button>';
        }
        $form .= "</form>";

        return $form;
    }
}

$mioForm = new Form('', 'POST');
$mioForm->addFields('email', 'email', 'Email...', ['required'=>'required', 'class'=>'form-control']);
$mioForm->addFields('password', 'password', 'Password...', ['required'=>'required', 'class'=>'form-control']);
$mioForm->submitButton('submit', 'Invia', ['class'=>'btn btn-dark']);

?>
