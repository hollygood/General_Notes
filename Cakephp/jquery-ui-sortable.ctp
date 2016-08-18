<?php

//-------------------------------------------------- Cakephp 2
//View

$this->Html->script('jquery-ui-1.11.1/jquery-ui.min', array('inline' => false));
$this->Html->css('/js/jquery-ui-1.11.1/jquery-ui.min', array('inline' => false));

$ajax = $this->Js->request(
	array('action' => 'save_order'),
	array(
		'method' => 'POST',
		'data' => 'data',
		'dataExpression' => true,
	)
);

$this->Js->get('table > tbody')->sortable(array(
	'handle' => '.fa-bars',
	'revert' => true,
	'placeholder' => 'ui-state-highlight',
	'update' => 'var data = $(this).sortable("serialize");' . $ajax,
));

$row = [
	$icons['sort']
];

echo $this->Html->tableCells(
	$row, 
	['id' => 'data_' . $entity['id']],
	['id' => 'data_' . $entity['id']] //IMPORTANT: EACH TR MUST HAS UNIQUE ID, WITH THE MODEL NAME, SLIDE IS MODEL NAME

  //!!!!! PLEASE NOTE THAT ONLY $slide['id'] WILL NOT WORK!!!! YOU HAVE TO ADD PREFIX!!!!!!!
  //AND IT'S BETTER TO USE _ INSTEAD OF -
);

//CONTROLLER

protected function _admin_save_order($Model) {
	$this->autoRender = false;
	
	if($this->request->is('ajax')) {
		
		foreach($this->request->data[$Model->alias] as $order => $id) {
			$Model->id = $id;
			$Model->save(array(
				'id' => $Model->id,
				'order' => $order
			));

			$d = $Model->findByDraftId($id);
			if(!empty($d)) {
				$Model->id = $d[$Model->alias]['id'];
				$Model->save(array(
					'id' => $Model->id,
					'order' => $order
				));
			}
		}
	}
}


//--------------------------------------------------------- CAKEPHP 3

echo $this->Html->scriptBlock("
    
  $('table > tbody').sortable({
    handle: '.fa-bars',
    revert:  true,
    placeholder: 'ui-state-highlight',
    update: function() {
      var data = $(this).sortable('serialize');

      $.ajax({
        url: '" . $this->Url->build(['action' => 'save_order']) . "',
        method: 'POST',
        data: data,
        dataExpression: true,
      });
    }
  });
  
", ['block' => true]);

public function save_order() {
	$this->autoRender = false;
	
	if ($this->request->is('ajax')) {
		
		foreach ($this->request->data['data'] as $order => $id) {
			$entity = $this->{$this->modelClass}->get($id);
			$entity->order_num = $order + 1;
			$this->{$this->modelClass}->save($entity);			
		}
		
		$this->Brands->recover(); //add this if it's tree structure

	}
}