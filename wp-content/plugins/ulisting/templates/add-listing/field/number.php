<?php
/**
 * Add listing field number
 *
 * Template can be modified by copying it to yourtheme/ulisting/add-listing/field/number.php.
 *
 * @see     #
 * @package uListing/Templates
 * @version 1.0
 */
?>
<div class="ulisting-form-gruop">
	<label><?php echo esc_html($attribute->title)?></label>
	<input class="form-control" type="number" v-model="attributes.<?php echo esc_attr($attribute->name)?>.value">
	<span v-if="errors['<?php echo esc_attr($attribute->name)?>']" class="text-danger">{{errors['<?php echo esc_attr($attribute->name)?>']}}</span>
</div>


